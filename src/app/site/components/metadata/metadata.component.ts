import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { SiteMetadata } from 'src/app/site-metadata';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

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
    return field[0].toUpperCase() + field.slice(1);
  }

  getFields() {
    return this.metadata$.pipe(
      map(metadata => Object.entries(metadata?.fields)),
      map(entries =>
        entries
          .map(
            ([key, value]) => typeof value === 'object' ?
              { ...value, name: key, label: this.getFieldLabel(key) } :
              { name: key, label: this.getFieldLabel(key) }
          )
          .filter(field => field.name !== 'id')
      ),
      shareReplay(1)
    );
  }
}
