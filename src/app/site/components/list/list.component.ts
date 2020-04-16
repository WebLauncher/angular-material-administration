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

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent extends MetadataComponent implements OnInit {
  displayedColumns$: Observable<string[]>;
  list$: Observable<any[]>;

  constructor(
    public route: ActivatedRoute,
    public db: AngularFirestore,
    private valueFormatService: ValueFormatService,
    private snackbar: SnackbarService
  ) {
    super(route, db);
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.displayedColumns$ = this.getDisplayedColumns();
    this.list$ = this.collection$.pipe(
      switchMap(collection => collection.valueChanges({ idField: 'id' }))
    );
  }

  getValue(element, column) {
    return this.metadata$.pipe(map(
      metadata => this.valueFormatService.transform(element[column], metadata?.fields[column]?.type, metadata?.fields[column])
    ));
  }

  delete(element) {
    combineLatest([
      this.metadata$,
      this.collection$
    ])
      .pipe(take(1))
      .subscribe(([metadata, collection]) => {
        collection.doc(element.id).delete().then(() => {
          this.snackbar.success(`${capitalize(metadata?.single)} added successfully!`);
        }).catch(() => {
          this.snackbar.error(`There was an error adding ${metadata?.single}!`);
        });
      });
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
