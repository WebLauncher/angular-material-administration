import {
 ChangeDetectionStrategy, Component, Inject, Optional,
} from '@angular/core';
import {
 ActivatedRoute, Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import {
 take, tap, switchMap, map,
} from 'rxjs/operators';
import { capitalize } from 'lodash-es';
import { SnackbarService } from '../../services/snackbar.service';
import { EntityComponent } from '../entity/entity.component';
import {
 MatAdministrationEntityField, MatAdministrationMetadata,
} from '../../types/material-administration-metadata';
import { Immutable } from '../../types/immutable';
import { DataAdapterInterface } from '../../types/data-adapter';
import {
  MAT_ADMINISTRATION_BASE_PATH,
  MAT_ADMINISTRATION_DATA_ADAPTER,
  MAT_ADMINISTRATION_METADATA,
} from '../../types/injection-tokens';

@Component({
  selector: 'mat-administration-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddComponent extends EntityComponent {
  fields$: Observable<MatAdministrationEntityField[]>;

  layout$: Observable<any>;

  constructor(
    public route: ActivatedRoute,
    private snackbar: SnackbarService,
    private router: Router,
    @Inject(MAT_ADMINISTRATION_DATA_ADAPTER) public dataAdapterService: DataAdapterInterface,
    @Optional() @Inject(MAT_ADMINISTRATION_METADATA) public metadata: Immutable<MatAdministrationMetadata>,
    @Optional() @Inject(MAT_ADMINISTRATION_BASE_PATH) public basePath: string,
  ) {
    super(route, dataAdapterService, metadata);

    this.fields$ = this.getFields().pipe(
      tap(() => {
        this.isLoading$.next(false);
      }),
    );

    this.layout$ = this.entity$.pipe(map((entityMetadata) => entityMetadata?.layout?.form));
  }

  submit(item: any) {
    this.isLoading$.next(true);

    this.entityName$
      .pipe(
        take(1),
        switchMap((entityName) => this.processUploads(item).pipe(map((updatedItem) => [entityName, updatedItem]))),
        switchMap(([entityName, updatedItem]) =>
          this.dataAdapterService.add(entityName, this.getWithTimestamps(updatedItem, 'add')),
        ),
      )
      .subscribe(
        () => {
          this.snackbar.success(`${capitalize(this.entity$.getValue()?.single)} added successfully!`);
          this.router.navigate([this.basePath, this.entityPath$.getValue(), 'list']);
        },
        () => this.snackbar.error(`There was an error adding ${this.entity$.getValue()?.single}!`),
        () => this.isLoading$.next(false),
      );
  }
}
