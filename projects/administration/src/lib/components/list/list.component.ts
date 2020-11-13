import { Component, Optional, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map, switchMap, shareReplay, tap, withLatestFrom } from 'rxjs/operators';
import { pickBy, capitalize, merge } from 'lodash-es';
import { ValueFormatService } from '../../services/value-format.service';
import { EntityComponent } from '../entity/entity.component';
import { SnackbarService } from '../../services/snackbar.service';
import { MatAdministrationMetadata, MatAdministrationEntityField } from '../../types/material-administration-metadata';
import { EntityFieldType } from '../../types/entity-field-type.enum';
import { DataAdapterInterface } from '../../types/data-adapter';
import {
  MAT_ADMINISTRATION_BASE_PATH,
  MAT_ADMINISTRATION_DATA_ADAPTER,
  MAT_ADMINISTRATION_METADATA
} from '../../types/injection-tokens';

@Component({
  selector: 'mat-administration-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends EntityComponent {
  displayedColumns$: Observable<any[]>;

  displayedColumnsNames$: Observable<string[]>;

  list$: Observable<any[]>;

  private refresh$: BehaviorSubject<void> = new BehaviorSubject(null);

  constructor(
    public route: ActivatedRoute,
    private valueFormatService: ValueFormatService,
    private snackbar: SnackbarService,
    @Inject(MAT_ADMINISTRATION_DATA_ADAPTER) public dataAdapterService: DataAdapterInterface,
    @Optional() @Inject(MAT_ADMINISTRATION_METADATA) public metadata: MatAdministrationMetadata,
    @Optional() @Inject(MAT_ADMINISTRATION_BASE_PATH) public basePath: string
  ) {
    super(route, dataAdapterService, metadata);

    this.displayedColumns$ = this.getDisplayedColumns();
    this.displayedColumnsNames$ = this.displayedColumns$.pipe(map((columns) => columns.map((column) => column?.id)));
    this.list$ = combineLatest([this.entityName$, this.refresh$]).pipe(
      switchMap(([entity]) => this.dataAdapterService.list(entity, this.getIdField())),
      tap(() => this.isLoading$.next(false)),
      shareReplay(1)
    );
  }

  getValue(element, column) {
    return this.entity$.pipe(
      map((metadata) =>
        this.valueFormatService.transform(element[column], metadata?.fields[column]?.type, metadata?.fields[column])
      )
    );
  }

  delete(element) {
    this.isLoading$.next(true);
    this.dataAdapterService.delete(this.entityName$.getValue(), element?.id).subscribe(
      () => this.snackbar.success(`${capitalize(this.entity$.getValue()?.single)} deleted successfully!`),
      () => this.snackbar.error(`There was an error deleting ${this.entity$.getValue()?.single}!`),
      () => {
        this.isLoading$.next(false);
        this.refresh$.next();
      }
    );
  }

  private getDisplayedColumns() {
    return this.entity$.pipe(
      withLatestFrom(this.subCollections$),
      map(([metadata, subCollections]) => {
        const columns = this.getDisplayableColumns(metadata?.fields);
        if (subCollections) {
          columns.push({ id: 'entities', label: 'Manage' });
        }
        columns.push({ id: 'actions', label: 'Actions' });

        return columns;
      }),
      shareReplay(1)
    );
  }

  private getDisplayableColumns(columns) {
    if (!columns) {
      return [];
    }

    const autoFields = this.getAutoFields();

    return Object.keys(pickBy(merge(columns, autoFields), (col) => this.canDisplayColumn(col)))
      .sort((column) => (column === this.getIdField() ? -1 : 0))
      .map((column) => ({
        ...columns[column],
        label: columns[column]?.label || this.getFieldLabel({ label: column }),
        id: columns[column]?.id || column
      }));
  }

  private canDisplayColumn(column: MatAdministrationEntityField): boolean {
    return column && !column?.hideInList && (column?.showInList || column?.type !== EntityFieldType.Timestamp);
  }
}
