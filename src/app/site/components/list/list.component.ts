import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SiteMetadata } from '../../../site-metadata';
import { ActivatedRoute } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, switchMap, shareReplay, tap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { ValueFormatService } from '../../services/value-format.service';
import { pickBy } from 'lodash';
import { MetadataComponent } from '../metadata/metadata.component';

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
    private valueFormatService: ValueFormatService
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
