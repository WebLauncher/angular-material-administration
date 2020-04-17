import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MetadataComponent } from '../metadata/metadata.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, combineLatest, BehaviorSubject } from 'rxjs';
import { map, shareReplay, switchMap, take, takeUntil, tap, filter } from 'rxjs/operators';
import { SnackbarService } from '../../services/snackbar.service';
import { capitalize } from 'lodash';
import { DataAdapterService } from '../../services/data-adapter.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpdateComponent extends MetadataComponent {
  fields$: Observable<any[]>;
  doc$: Observable<any>;
  id$: BehaviorSubject<any> = new BehaviorSubject(null);
  entityTitle$: Observable<string>;

  constructor(
    public route: ActivatedRoute,
    private snackbar: SnackbarService,
    private router: Router,
    public dataAdapterService: DataAdapterService
  ) {
    super(route, dataAdapterService);

    this.route.params.pipe(map(params => params.id), takeUntil(this.destroyed$)).subscribe(this.id$);
    this.doc$ = this.getDoc();
    this.fields$ = combineLatest([this.getFields(), this.doc$])
      .pipe(
        map(([fields, doc]) => fields.map(field => {
          return { ...field, value: this.getFieldValue(field, doc) };
        }))
      );
    this.entityTitle$ = this.doc$.pipe(map(doc => doc?.[this.metadata$.getValue()?.titleField || 'title']));
  }

  save(item: any) {
    this.isLoading$.next(true);
    this.dataAdapterService.update(
      this.collectionName$.getValue(),
      this.id$.getValue(),
      this.getWithTimestamps(item, this.metadata$.getValue(), 'update')
    ).subscribe(
      () => {
        this.snackbar.success(`${capitalize(this.metadata$.getValue()?.single)} updated successfully!`);
        this.router.navigate([`/${this.collectionName$.getValue()}/list`]);
      },
      () => this.snackbar.error(`There was an error updating ${this.metadata$.getValue()?.single}!`),
      () => this.isLoading$.next(false)
    );
  }

  private getDoc() {
    return this.dataAdapterService.get(this.collectionName$.getValue(), this.id$.getValue()).pipe(
      tap(() => this.isLoading$.next(false)),
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
