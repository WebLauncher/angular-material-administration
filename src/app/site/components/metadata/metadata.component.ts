import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { BehaviorSubject, of, forkJoin, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, shareReplay, switchMap, take, catchError, takeUntil, tap } from 'rxjs/operators';
import { SiteMetadata } from 'src/app/site-metadata';
import { capitalize } from 'lodash';
import { DataAdapterService } from '../../services/data-adapter.service';

@Component({
  selector: 'app-metadata',
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
    public dataAdapterService: DataAdapterService
  ) {
    this.route.params.pipe(
      tap(() => this.isLoading$.next(true)),
      map(params => params?.collection),
      takeUntil(this.destroyed$)
    ).subscribe(this.collectionName$);
    this.collectionName$.pipe(
      map(name => SiteMetadata.entities[name] || null),
      takeUntil(this.destroyed$),
      shareReplay(1)
    ).subscribe(this.metadata$);
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  getFieldLabel(field: string) {
    return capitalize(field);
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

        return [];
      }),
      shareReplay(1)
    );
  }

  getWithTimestamps(element, metadata, action: 'add' | 'update') {
    const newElement = { ...element };

    const timestamp = this.dataAdapterService.getTimestamp();
    if (action === 'add' && metadata?.createdTimestamp) {
      newElement[metadata?.createdTimestamp] = timestamp;
    }
    if (metadata?.updatedTimestamp) {
      newElement[metadata?.updatedTimestamp] = timestamp;
    }

    return newElement;
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
