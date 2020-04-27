import { Component, ChangeDetectionStrategy, OnDestroy, Optional, Inject } from '@angular/core';
import { BehaviorSubject, of, forkJoin, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, shareReplay, switchMap, take, catchError, takeUntil, tap, finalize } from 'rxjs/operators';
import { capitalize } from 'lodash';
import { DataAdapterService } from '../../services/data-adapter.service';

@Component({
  selector: 'mat-administration-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MetadataComponent implements OnDestroy {
  metadata$: BehaviorSubject<any> = new BehaviorSubject(null);
  collectionName$: BehaviorSubject<string> = new BehaviorSubject(null);
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  destroyed$ = new Subject();

  constructor(
    public route: ActivatedRoute,
    public dataAdapterService: DataAdapterService,
    @Optional() @Inject('MAT_ADMINISTRATION_METADATA') public metadata: any
  ) {
    this.route.params.pipe(
      tap(() => this.isLoading$.next(true)),
      map(params => params?.collection),
      takeUntil(this.destroyed$)
    ).subscribe(this.collectionName$);
    this.collectionName$.pipe(
      map(name => metadata.entities[name] || null),
      takeUntil(this.destroyed$),
      shareReplay(1)
    ).subscribe(this.metadata$);
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  getFieldLabel(field: any) {
    return capitalize(field?.label);
  }

  getFields() {
    return this.metadata$.pipe(
      map(metadata => {
        const entries = Object.entries(metadata?.fields);

        return entries
          .map(
            ([key, value]) => typeof value === 'object' ?
              { ...value, name: key, label: ((value as any)?.label || this.getFieldLabel(key)) } :
              { name: key, label: this.getFieldLabel(key) }
          )
          .filter(field => this.showField(metadata, field));
      }),
      switchMap(fields => forkJoin(fields.map(field => this.addAdditionalMetadata(field)))),
      catchError(error => {
        console.error(error);

        return of([]);
      }),
      shareReplay(1)
    );
  }

  processUploads(item, metadata, action: 'add' | 'update') {
    const filesKeys = Object.keys(item)
      .filter(key => Array.isArray(item[key]) && item[key][0] instanceof File);

    const itemUpdates = {};

    return forkJoin(filesKeys.map(key => {
      return this.dataAdapterService.upload(item[key][0]).pipe(
        map(downloadUrl => {
          return { key, downloadUrl };
        }),
        catchError(error => {
          console.error(error);

          return of(null);
        })
      );
    })).pipe(
      map(uploadedFiles => {
        if (uploadedFiles) {
          uploadedFiles.forEach(uploadedFile => {
            itemUpdates[uploadedFile?.key] = uploadedFile?.downloadUrl;
          });
        }

        return {
          ...item,
          ...itemUpdates
        };
      })
    );
  }

  getWithTimestamps(item, metadata, action: 'add' | 'update') {
    const newItem = { ...item };

    const timestamp = this.dataAdapterService.getTimestamp();
    if (action === 'add' && metadata?.createdTimestamp) {
      newItem[metadata?.createdTimestamp] = timestamp;
    }
    if (metadata?.updatedTimestamp) {
      newItem[metadata?.updatedTimestamp] = timestamp;
    }

    return newItem;
  }

  private addAdditionalMetadata(field) {
    if ((field?.inputType === 'select' || field?.inputType === 'radio') && field?.data?.type === 'collection') {
      return this.dataAdapterService.list(field?.data?.collection, field?.data?.collectionValue)
        .pipe(
          take(1),
          map(docs => {
            return {
              ...field,
              options: docs.map(doc => {
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

  private showField(metadata, field) {
    return field.name !== 'id' &&
      (!metadata?.createdTimestamp || metadata?.createdTimestamp !== field.name) &&
      (!metadata?.updatedTimestamp || metadata?.updatedTimestamp !== field.name);
  }
}
