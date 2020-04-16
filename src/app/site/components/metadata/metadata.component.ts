import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, BehaviorSubject, of, forkJoin } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, shareReplay, tap, switchMap, take, catchError } from 'rxjs/operators';
import { SiteMetadata } from 'src/app/site-metadata';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { capitalize } from 'lodash';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MetadataComponent implements OnInit {
  metadata$: Observable<any>;
  collectionName$: Observable<string>;
  collection$: Observable<AngularFirestoreCollection<any>>;
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor(
    public route: ActivatedRoute,
    public db: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.collectionName$ = this.route.params.pipe(map(params => params?.collection));
    this.metadata$ = this.collectionName$.pipe(map(name => SiteMetadata.entities[name] || null), shareReplay(1));
    this.collection$ = this.collectionName$.pipe(
      map(collectionName => this.db.collection(collectionName)),
      tap(() => this.isLoading$.next(false))
    );
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
              { ...value, name: key, label: this.getFieldLabel(key) } :
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

    const timestamp = firebase.firestore.FieldValue.serverTimestamp()
    if (action === 'add' && metadata?.createdTimestamp) {
      newElement[metadata?.createdTimestamp] = timestamp;
    }
    if (metadata?.updatedTimestamp) {
      newElement[metadata?.updatedTimestamp] = timestamp;
    }

    return newElement;
  }

  private addAdditionalMetadata(field) {
    if (field?.type === 'select' && field?.select?.type === 'collection') {
      return this.db.collection(field?.select?.collection)
        .valueChanges({ idField: field?.select?.collectionValue })
        .pipe(
          take(1),
          map(docs => {
            return {
              ...field,
              options: docs.map(doc => {
                return {
                  value: doc[field?.select?.collectionValue],
                  label: doc[field?.select?.collectionLabel]
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
