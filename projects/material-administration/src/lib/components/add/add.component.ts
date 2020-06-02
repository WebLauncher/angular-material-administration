import { Component, Inject, Optional } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, tap, switchMap, map } from 'rxjs/operators';
import { capitalize } from 'lodash';
import { Immutable } from 'types/immutable';
import { SnackbarService } from '../../services/snackbar.service';
import { DataAdapterService } from '../../services/data-adapter.service';
import { MetadataComponent } from '../metadata/metadata.component';

@Component({
  selector: 'mat-administration-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent extends MetadataComponent {
  fields$: Observable<any[]>;

  constructor(
    public route: ActivatedRoute,
    private snackbar: SnackbarService,
    private router: Router,
    public dataAdapterService: DataAdapterService,
    @Optional() @Inject('MAT_ADMINISTRATION_METADATA') public metadata: Immutable<any>
  ) {
    super(route, dataAdapterService, metadata);

    this.fields$ = this.getFields().pipe(
      tap(() => {
        this.isLoading$.next(false);
      })
    );
  }

  save(item: any) {
    this.isLoading$.next(true);
    this.collectionName$
      .pipe(
        take(1),
        switchMap(([collectionName]) => {
          return this.processUploads(item).pipe(
            map((updatedItem) => {
              return [collectionName, updatedItem];
            })
          );
        }),
        switchMap(([collectionName, updatedItem]) =>
          this.dataAdapterService.add(collectionName, this.getWithTimestamps(updatedItem, 'add'))
        )
      )
      .subscribe(
        () => {
          this.snackbar.success(`${capitalize(this.metadata$.getValue()?.single)} added successfully!`);
          this.router.navigate([`/${this.collectionPath$.getValue()}/list`]);
        },
        () => this.snackbar.error(`There was an error adding ${this.metadata$.getValue()?.single}!`),
        () => this.isLoading$.next(false)
      );
  }
}
