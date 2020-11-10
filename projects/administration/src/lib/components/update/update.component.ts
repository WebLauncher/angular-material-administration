import { Component, Optional, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, combineLatest, BehaviorSubject } from 'rxjs';
import { map, shareReplay, takeUntil, tap, take, switchMap } from 'rxjs/operators';
import { capitalize } from 'lodash-es';
import { EntityFieldType } from '../../types/entity-field-type.enum';
import { EntityComponent } from '../entity/entity.component';
import { DataAdapterInterface } from '../../types/data-adapter';
import { SnackbarService } from '../../services';

@Component({
  selector: 'mat-administration-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent extends EntityComponent {
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
    this.entityTitle$ = this.doc$.pipe(map((doc) => doc?.[this.entity$.getValue()?.titleField || 'title']));
    this.layout$ = this.entity$.pipe(map((entityMetadata) => entityMetadata?.layout?.form));
  }

  submit(item: any) {
    this.isLoading$.next(true);

    this.entityName$
      .pipe(
        take(1),
        switchMap((entityName) => {
          return this.processUploads(item).pipe(
            map((updatedItem) => {
              return [entityName, updatedItem];
            })
          );
        }),
        switchMap(([entityName, updatedItem]) =>
          this.dataAdapterService.update(entityName, this.id$.getValue(), this.getWithTimestamps(updatedItem, 'update'))
        )
      )
      .subscribe(
        () => {
          this.snackbar.success(`${capitalize(this.entity$.getValue()?.single)} updated successfully!`);
          this.router.navigate([`/${this.entityPath$.getValue()}/list`]);
        },
        () => this.snackbar.error(`There was an error updating ${this.entity$.getValue()?.single}!`),
        () => this.isLoading$.next(false)
      );
  }

  private getDoc() {
    return this.dataAdapterService.get(this.entityName$.getValue(), this.id$.getValue()).pipe(
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
