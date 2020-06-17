import { Component, Optional, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, combineLatest, BehaviorSubject } from 'rxjs';
import { map, shareReplay, takeUntil, tap, take, switchMap } from 'rxjs/operators';
import { capitalize } from 'lodash-es';
import { EntityFieldType } from '../../types';
import { SnackbarService } from '../../services/snackbar.service';
import { MetadataComponent } from '../metadata/metadata.component';
import { DataAdapterInterface } from '../../services';

@Component({
  selector: 'mat-administration-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent extends MetadataComponent {
  fields$: Observable<any[]>;

  doc$: Observable<any>;

  id$: BehaviorSubject<any> = new BehaviorSubject(null);

  entityTitle$: Observable<string>;

  layout$: Observable<any>;

  constructor(
    public route: ActivatedRoute,
    private snackbar: SnackbarService,
    private router: Router,
    @Inject('MAT_ADMINISTRATION_DATA_ADAPTER') public dataAdapterService: DataAdapterInterface,
    @Optional() @Inject('MAT_ADMINISTRATION_METADATA') public metadata: any
  ) {
    super(route, dataAdapterService, metadata);

    this.route.params
      .pipe(
        map((params) => params.id),
        takeUntil(this.destroyed$)
      )
      .subscribe(this.id$);
    this.doc$ = this.getDoc();
    this.fields$ = combineLatest([this.getFields(), this.doc$]).pipe(
      map(([fields, doc]) =>
        fields.map((field) => {
          return { ...field, value: this.getFieldValue(field, doc) };
        })
      )
    );
    this.entityTitle$ = this.doc$.pipe(map((doc) => doc?.[this.metadata$.getValue()?.titleField || 'title']));
    this.layout$ = this.metadata$.pipe(map((entityMetadata) => entityMetadata?.layout?.form));
  }

  submit(item: any) {
    this.isLoading$.next(true);

    this.collectionName$
      .pipe(
        take(1),
        switchMap((collectionName) => {
          return this.processUploads(item).pipe(
            map((updatedItem) => {
              return [collectionName, updatedItem];
            })
          );
        }),
        switchMap(([collectionName, updatedItem]) =>
          this.dataAdapterService.update(
            collectionName,
            this.id$.getValue(),
            this.getWithTimestamps(updatedItem, 'update')
          )
        )
      )
      .subscribe(
        () => {
          this.snackbar.success(`${capitalize(this.metadata$.getValue()?.single)} updated successfully!`);
          this.router.navigate([`/${this.collectionPath$.getValue()}/list`]);
        },
        () => this.snackbar.error(`There was an error updating ${this.metadata$.getValue()?.single}!`),
        () => this.isLoading$.next(false)
      );
  }

  private getDoc() {
    return this.dataAdapterService.get(this.collectionName$.getValue(), this.id$.getValue()).pipe(
      tap(() => this.isLoading$.next(false)),
      shareReplay(1)
    );
  }

  private getFieldValue(field: any, doc: any) {
    if (field?.type === EntityFieldType.Timestamp) {
      return doc?.[field?.name]?.toDate();
    }

    return doc?.[field?.name];
  }
}