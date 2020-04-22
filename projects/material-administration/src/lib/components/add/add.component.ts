import { Component, ChangeDetectionStrategy, Inject, Optional } from '@angular/core';
import { MetadataComponent } from '../metadata/metadata.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { take, tap, switchMap } from 'rxjs/operators';
import { SnackbarService } from '../../services/snackbar.service';
import { capitalize } from 'lodash';
import { DataAdapterService } from '../../services/data-adapter.service';
import { Immutable } from 'types/immutable';

@Component({
  selector: 'mat-administration-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

    this.fields$ = this.getFields().pipe(tap(() => this.isLoading$.next(false)));
  }

  save(element: any) {
    this.isLoading$.next(true);
    combineLatest([
      this.metadata$,
      this.collectionName$
    ])
      .pipe(
        take(1),
        switchMap(([metadata, collectionName]) => this.dataAdapterService.add(collectionName, this.getWithTimestamps(element, metadata, 'add')))
      ).subscribe(
        () => {
          this.snackbar.success(`${capitalize(this.metadata$.getValue()?.single)} added successfully!`);
          this.router.navigate([`/${this.collectionName$.getValue()}/list`]);
        },
        () => this.snackbar.error(`There was an error adding ${this.metadata$.getValue()?.single}!`),
        () => this.isLoading$.next(false)
      );
  }
}
