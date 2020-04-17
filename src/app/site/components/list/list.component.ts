import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map, switchMap, shareReplay, tap, take } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { ValueFormatService } from '../../services/value-format.service';
import { pickBy } from 'lodash';
import { MetadataComponent } from '../metadata/metadata.component';
import { SnackbarService } from '../../services/snackbar.service';
import { capitalize } from 'lodash';
import { DataAdapterService } from '../../services/data-adapter.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent extends MetadataComponent {
  displayedColumns$: Observable<string[]>;
  list$: Observable<any[]>;

  constructor(
    public route: ActivatedRoute,
    private valueFormatService: ValueFormatService,
    private snackbar: SnackbarService,
    public dataAdapterService: DataAdapterService
  ) {
    super(route, dataAdapterService);

    this.displayedColumns$ = this.getDisplayedColumns();
    this.list$ = this.collectionName$.pipe(
      switchMap(collection => this.dataAdapterService.list(collection, 'id')),
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
      map(metadata => [...this.getDisplayableColumns(metadata?.fields), 'actions']),
      shareReplay(1)
    );
  }

  private getDisplayableColumns(columns) {
    if (!columns) {
      return [];
    }

    return Object.keys(pickBy(columns, col => col && !col?.hideInList));
  }
}
