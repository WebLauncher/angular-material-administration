import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MetadataComponent } from '../metadata/metadata.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, combineLatest } from 'rxjs';
import { map, shareReplay, switchMap, take } from 'rxjs/operators';
import { SnackbarService } from '../../services/snackbar.service';
import { capitalize } from 'lodash';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpdateComponent extends MetadataComponent implements OnInit {
  fields$: Observable<any[]>;
  doc$: Observable<any>;
  id$: Observable<any>;

  get entityTitle$() {
    return combineLatest([
      this.metadata$,
      this.doc$
    ]).pipe(map(([metadata, doc]) => doc?.[metadata?.titleField || 'title']));
  }

  constructor(
    public route: ActivatedRoute,
    public db: AngularFirestore,
    private snackbar: SnackbarService,
    private router: Router
  ) {
    super(route, db);
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.id$ = this.route.params.pipe(map(params => params.id), shareReplay(1));
    this.doc$ = this.getDoc();
    this.fields$ = combineLatest([this.getFields(), this.doc$])
      .pipe(
        map(([fields, doc]) => fields.map(field => {
          return { ...field, value: this.getFieldValue(field, doc) };
        }))
      );
  }

  save(element: any) {
    combineLatest([
      this.metadata$,
      this.collection$,
      this.collectionName$,
      this.id$
    ])
      .pipe(take(1))
      .subscribe(([metadata, collection, collectionName, id]) => {
        collection.doc(id).update(this.getWithTimestamps(element, metadata, 'update'))
          .then(() => {
            this.snackbar.success(`${capitalize(metadata?.single)} updated successfully!`);
            this.router.navigate([`/${collectionName}/list`]);
          }).catch(() => {
            this.snackbar.error(`There was an error updating ${metadata?.single}!`);
          });
      });
  }

  private getDoc() {
    return combineLatest([
      this.id$,
      this.collection$
    ]).pipe(
      switchMap(([id, collection]) => collection.doc(id).valueChanges()),
      shareReplay(1)
    );
  }

  private getFieldValue(field: any, doc: any) {
    if (field?.type === 'timestamp') {
      return doc?.[field?.name]?.toDate();
    }

    return doc?.[field?.name];
  }
}
