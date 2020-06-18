import { Component, OnDestroy, Optional, Inject } from '@angular/core';
import { BehaviorSubject, of, forkJoin, Subject, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, shareReplay, switchMap, take, catchError, takeUntil, tap } from 'rxjs/operators';
import { capitalize } from 'lodash-es';
import { Immutable } from 'types/immutable';
import { DownloadData, DataAdapterInterface } from '../../services/index';
import {
  MatAdministrationEntity,
  MatAdministrationEntityField,
  MatAdministrationMetadata
} from '../../types/material-administration-metadata';
import { EntityFieldType, EntityFieldInputType } from '../../types';

@Component({
  selector: 'mat-administration-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.scss']
})
export class MetadataComponent implements OnDestroy {
  metadata$: BehaviorSubject<any> = new BehaviorSubject(null);

  collectionPath$: BehaviorSubject<string> = new BehaviorSubject(null);

  collectionName$: BehaviorSubject<string> = new BehaviorSubject(null);

  subCollections$: BehaviorSubject<MatAdministrationEntity[]> = new BehaviorSubject(null);

  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  destroyed$ = new Subject();

  constructor(
    public route: ActivatedRoute,
    @Inject('MAT_ADMINISTRATION_DATA_ADAPTER') public dataAdapterService: DataAdapterInterface,
    @Optional() @Inject('MAT_ADMINISTRATION_METADATA') public metadata: Immutable<MatAdministrationMetadata>
  ) {
    this.route.params
      .pipe(
        map((params) => params?.collection),
        tap(() => this.isLoading$.next(true)),
        takeUntil(this.destroyed$)
      )
      .subscribe(this.collectionPath$);

    this.collectionPath$
      .pipe(
        map((collectionPath) => collectionPath.replace(/:/gi, '/')),
        shareReplay(1)
      )
      .subscribe(this.collectionName$);

    this.collectionName$
      .pipe(
        map((name) => this.getMetadata(name, metadata)),
        shareReplay(1)
      )
      .subscribe(this.metadata$);

    this.metadata$
      .pipe(
        map((meta) => {
          if (!meta?.entities) {
            return null;
          }

          return Object.keys(meta.entities).map((key) => {
            return {
              id: key,
              ...meta.entities[key]
            };
          });
        })
      )
      .subscribe(this.subCollections$);
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  getFieldLabel(field: any): string {
    if (typeof field === 'string') {
      return capitalize(field);
    }

    return capitalize(field?.label);
  }

  getFields() {
    return this.metadata$.pipe(
      map((metadata) => {
        const entries = Object.entries({
          ...metadata?.fields,
          ...this.getAutoFields()
        });

        return entries
          .map(([key, value]) =>
            typeof value === 'object'
              ? { ...value, name: key, label: (value as any)?.label || this.getFieldLabel(key) }
              : { name: key, label: this.getFieldLabel(key) }
          )
          .filter((field) => this.showField(metadata, field));
      }),
      switchMap((fields) => forkJoin(fields.map((field) => this.addAdditionalMetadata(field)))),
      catchError(() => of([])),
      shareReplay(1)
    );
  }

  processUploads(item) {
    const filesKeys = Object.keys(item).filter((key) => Array.isArray(item[key]) && item[key][0] instanceof File);

    if (filesKeys.length) {
      const itemUpdates = {};

      return forkJoin(
        filesKeys.map((key) => {
          return this.dataAdapterService.upload(item[key][0]).pipe(
            map((downloadData) => {
              return { key, downloadData };
            }),
            catchError(() => of(null))
          ) as Observable<{ key: string; downloadData: DownloadData }>;
        })
      ).pipe(
        map((uploadedFiles) => {
          if (uploadedFiles) {
            uploadedFiles.forEach((uploadedFile) => {
              itemUpdates[uploadedFile?.key] = uploadedFile?.downloadData?.downloadUrl;
              itemUpdates[`${uploadedFile?.key}Path`] = uploadedFile?.downloadData?.path;
            });
          }

          return {
            ...item,
            ...itemUpdates
          };
        })
      );
    }

    return of(item);
  }

  getWithTimestamps(item, action: 'add' | 'update') {
    const newItem = { ...item };

    const timestamp = this.dataAdapterService.getTimestamp();
    const metadata = this.metadata$.getValue();
    if (action === 'add' && (metadata?.createdTimestamp || metadata?.autoTimestamps)) {
      newItem[metadata?.createdTimestamp || 'created'] = timestamp;
    }
    if (metadata?.updatedTimestamp || metadata?.autoTimestamps) {
      newItem[metadata?.updatedTimestamp || 'updated'] = timestamp;
    }

    return newItem;
  }

  getFieldMedatada(field: string) {
    return this.metadata$.getValue()?.entities?.[field];
  }

  getAutoFields(): { [k: string]: string | Partial<MatAdministrationEntityField> } {
    const autoFields: { [k: string]: string | Partial<MatAdministrationEntityField> } = {};
    const metadata = this.metadata$.getValue();

    if (metadata.autoTimestamps) {
      autoFields.created = {
        type: EntityFieldType.Timestamp
      };
      autoFields.updated = {
        type: EntityFieldType.Timestamp
      };
    }

    if (!metadata.idField && !metadata.fields[this.getIdField()]) {
      autoFields.id = this.getIdField();
    }

    return autoFields;
  }

  getIdField() {
    return this.metadata$.getValue()?.idField || 'id';
  }

  private getMetadata(collectionName: string, metadata: any) {
    const nameParts = collectionName.split('/');

    if (nameParts.length === 1) {
      return metadata.entities[nameParts[0]] || null;
    }

    return this.getMetadata(nameParts.slice(2).join('/'), metadata.entities[nameParts[0]]);
  }

  private addAdditionalMetadata(field) {
    if (
      (field?.inputType === EntityFieldInputType.Select || field?.inputType === EntityFieldInputType.Radio) &&
      field?.data?.type === 'collection'
    ) {
      return this.dataAdapterService.list(field?.data?.collection, field?.data?.collectionValue).pipe(
        take(1),
        map((docs) => {
          return {
            ...field,
            options: docs.map((doc) => {
              return {
                value: doc[field?.data?.collectionValue],
                label: doc[field?.data?.collectionLabel]
              };
            })
          };
        })
      );
    }

    return of(field);
  }

  private showField(metadata: MatAdministrationEntity, field: Partial<MatAdministrationEntityField>) {
    const fieldDetails = this.getFieldDetails(metadata, field);

    let createdTimestamp = metadata?.createdTimestamp;
    if (metadata?.autoTimestamps && !createdTimestamp) {
      createdTimestamp = 'created';
    }

    let updatedTimestamp = '';
    if (metadata?.autoTimestamps && !updatedTimestamp) {
      updatedTimestamp = 'updated';
    }

    return (
      field.name !== this.getIdField() &&
      (((!createdTimestamp || createdTimestamp !== field.name) &&
        (!updatedTimestamp || updatedTimestamp !== field.name)) ||
        (!fieldDetails?.hideInForm && fieldDetails?.type !== EntityFieldType.Timestamp) ||
        fieldDetails.showInForm)
    );
  }

  private getFieldDetails(
    metadata: MatAdministrationEntity,
    field: Partial<MatAdministrationEntityField>
  ): Partial<MatAdministrationEntityField> {
    return {
      ...field,
      ...(metadata?.fields[field?.name] as Partial<MatAdministrationEntityField>)
    };
  }
}
