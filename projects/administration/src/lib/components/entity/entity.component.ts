import { Component, OnDestroy, Optional, Inject } from '@angular/core';
import { BehaviorSubject, of, forkJoin, Subject, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, shareReplay, switchMap, take, catchError, takeUntil, tap } from 'rxjs/operators';
import { capitalize } from 'lodash-es';
import {
  MatAdministrationEntity,
  MatAdministrationMetadata,
  MatAdministrationEntityField
} from '../../types/material-administration-metadata';
import { Immutable } from '../../types/immutable';
import { EntityFieldType } from '../../types/entity-field-type.enum';
import { EntityFieldInputType } from '../../types/entity-field-input-type.enum';
import { DataAdapterInterface, DownloadData } from '../../types/data-adapter';

@Component({
  selector: 'mat-administration-entity',
  template: ''
})
export class EntityComponent implements OnDestroy {
  entity$: BehaviorSubject<any> = new BehaviorSubject(null);

  entityPath$: BehaviorSubject<string> = new BehaviorSubject(null);

  entityName$: BehaviorSubject<string> = new BehaviorSubject(null);

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
        map((params) => params?.entity),
        tap(() => this.isLoading$.next(true)),
        takeUntil(this.destroyed$)
      )
      .subscribe(this.entityPath$);

    this.entityPath$
      .pipe(
        map((entityPath) => entityPath.replace(/:/gi, '/')),
        shareReplay(1)
      )
      .subscribe(this.entityName$);

    this.entityName$
      .pipe(
        map((name) => this.getMetadata(name, metadata)),
        shareReplay(1)
      )
      .subscribe(this.entity$);

    this.entity$
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
    return this.entity$.pipe(
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
    const metadata = this.entity$.getValue();
    if (action === 'add' && (metadata?.createdTimestamp || metadata?.autoTimestamps)) {
      newItem[metadata?.createdTimestamp || 'created'] = timestamp;
    }
    if (metadata?.updatedTimestamp || metadata?.autoTimestamps) {
      newItem[metadata?.updatedTimestamp || 'updated'] = timestamp;
    }

    return newItem;
  }

  getFieldMedatada(field: string) {
    return this.entity$.getValue()?.entities?.[field];
  }

  getAutoFields(): { [k: string]: string | Partial<MatAdministrationEntityField> } {
    const autoFields: { [k: string]: string | Partial<MatAdministrationEntityField> } = {};
    const metadata = this.entity$.getValue();

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
    return this.entity$.getValue()?.idField || 'id';
  }

  private getMetadata(entityName: string, metadata: any) {
    const nameParts = entityName.split('/');

    if (nameParts.length === 1) {
      return metadata.entities[nameParts[0]] || null;
    }

    return this.getMetadata(nameParts.slice(2).join('/'), metadata.entities[nameParts[0]]);
  }

  private addAdditionalMetadata(field) {
    if (
      (field?.inputType === EntityFieldInputType.Select || field?.inputType === EntityFieldInputType.Radio) &&
      field?.data?.type === 'entity'
    ) {
      return this.dataAdapterService.list(field?.data?.entity, field?.data?.entityValue).pipe(
        take(1),
        map((docs) => {
          return {
            ...field,
            options: docs.map((doc) => {
              return {
                value: doc[field?.data?.entityValue],
                label: doc[field?.data?.entityLabel]
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
