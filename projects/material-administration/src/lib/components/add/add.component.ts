import { Component, Inject, Optional } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, tap, switchMap, map } from 'rxjs/operators';
import { capitalize } from 'lodash-es';
import { Immutable } from 'types/immutable';
import { SnackbarService } from '../../services/snackbar.service';
import { MetadataComponent } from '../metadata/metadata.component';
import { DataAdapterInterface } from '../../services/data-adapter';
import { MatAdministrationEntityField } from '../../types';

@Component({
  selector: 'mat-administration-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent extends MetadataComponent {
  fields$: Observable<MatAdministrationEntityField[]>;

  layout$: Observable<any>;

  constructor(
    public route: ActivatedRoute,
    private snackbar: SnackbarService,
    private router: Router,
    @Inject('MAT_ADMINISTRATION_DATA_ADAPTER') public dataAdapterService: DataAdapterInterface,
    @Optional() @Inject('MAT_ADMINISTRATION_METADATA') public metadata: Immutable<any>
  ) {
    super(route, dataAdapterService, metadata);

    this.fields$ = this.getFields().pipe(
      tap(() => {
        this.isLoading$.next(false);
      })
    );

    this.layout$ = this.metadata$.pipe(map((entityMetadata) => entityMetadata?.layout?.form));
  }

  submit(item: any) {
    this.isLoading$.next(true);

    this.collectionName$
      .pipe(
        take(1),
        switchMap((collectionName) =>
          this.processUploads(item).pipe(map((updatedItem) => [collectionName, updatedItem]))
        ),
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
