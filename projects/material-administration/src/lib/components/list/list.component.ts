import { Component, Optional, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, shareReplay, tap, withLatestFrom } from 'rxjs/operators';
import { ValueFormatService } from '../../services/value-format.service';
import { pickBy } from 'lodash';
import { MetadataComponent } from '../metadata/metadata.component';
import { SnackbarService } from '../../services/snackbar.service';
import { capitalize } from 'lodash';
import { DataAdapterService } from '../../services/data-adapter.service';

@Component({
  selector: 'mat-administration-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends MetadataComponent {
  displayedColumns$: Observable<any[]>;
  displayedColumnsNames$: Observable<string[]>;
  list$: Observable<any[]>;

  constructor(
    public route: ActivatedRoute,
    private valueFormatService: ValueFormatService,
    private snackbar: SnackbarService,
    public dataAdapterService: DataAdapterService,
    @Optional() @Inject('MAT_ADMINISTRATION_METADATA') public metadata: any
  ) {
    super(route, dataAdapterService, metadata);

    this.displayedColumns$ = this.getDisplayedColumns();
    this.displayedColumnsNames$ = this.displayedColumns$.pipe(map(columns => columns.map(column => column?.id)));
    this.list$ = this.collectionName$.pipe(
      switchMap(collection => this.dataAdapterService.list(collection, this.metadata$.getValue()?.idField || 'id')),
      shareReplay(1),
      tap(() => this.isLoading$.next(false))
    );
  }

  getValue(element, column) {
    return this.metadata$.pipe(map(
      metadata => this.valueFormatService.transform(element[column], metadata?.fields[column]?.type, metadata?.fields[column])
    ));
  }

  delete(element) {
    this.isLoading$.next(true);
    this.dataAdapterService.delete(this.collectionName$.getValue(), element?.id)
      .subscribe(
        () => this.snackbar.success(`${capitalize(this.metadata$.getValue()?.single)} added successfully!`),
        () => this.snackbar.error(`There was an error adding ${this.metadata$.getValue()?.single}!`),
        () => this.isLoading$.next(false)
      );
  }

  private getDisplayedColumns() {
    return this.metadata$.pipe(
      withLatestFrom(this.subCollections$),
      map(([metadata, subCollections]) => {
        const collumns = this.getDisplayableColumns(metadata?.fields);
        if (subCollections) {
          collumns.push({ id: 'entities', label: 'Manage' });
        }
        collumns.push({ id: 'actions', label: 'Actions' });

        return collumns;
      }),
      shareReplay(1)
    );
  }

  private getDisplayableColumns(columns) {
    if (!columns) {
      return [];
    }

    return Object.keys(pickBy(columns, col => col && !col?.hideInList)).map(column => {
      return {
        ...columns[column],
        label: columns[column]?.label || this.getFieldLabel({ label: column }),
        id: columns[column]?.id || column
      };
    });
  }
}
