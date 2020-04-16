import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MetadataComponent } from '../metadata/metadata.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, combineLatest } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { SnackbarService } from '../../services/snackbar.service';
import { capitalize } from 'lodash';
import * as firebase from 'firebase';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddComponent extends MetadataComponent implements OnInit {
  fields$: Observable<any[]>;

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

    this.fields$ = this.getFields().pipe(tap(() => this.isLoading$.next(false)));
  }

  save(element: any) {
    combineLatest([
      this.metadata$,
      this.collection$,
      this.collectionName$
    ])
      .pipe(take(1))
      .subscribe(([metadata, collection, collectionName]) => {
        collection.add(this.getWithTimestamps(element, metadata, 'add'))
          .then(() => {
            this.snackbar.success(`${capitalize(metadata?.single)} added successfully!`);
            this.router.navigate([`/${collectionName}/list`]);
          }).catch(() => {
            this.snackbar.error(`There was an error adding ${metadata?.single}!`);
          });
      });
  }
}
