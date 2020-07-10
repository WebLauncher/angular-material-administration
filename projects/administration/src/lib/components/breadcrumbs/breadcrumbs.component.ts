import { Component, OnInit, Input, Optional, Inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { capitalize } from 'lodash-es';
import { map } from 'rxjs/operators';
import { MatAdministrationMetadata, MatAdministrationEntity } from '../../types/material-administration-metadata';
import { DataAdapterInterface } from '../../types/data-adapter';

@Component({
  selector: 'mat-administration-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  @Input() set entityName(value: string) {
    this.entityName$.next(value);
  }

  get entityName() {
    return this.entityName$.getValue();
  }

  @Input() action: 'add' | 'update' | 'list';

  links$: Observable<any>;

  private entityName$ = new BehaviorSubject('');

  constructor(
    @Optional() @Inject('MAT_ADMINISTRATION_METADATA') public metadata: MatAdministrationMetadata,
    @Inject('MAT_ADMINISTRATION_DATA_ADAPTER') public dataAdapterService: DataAdapterInterface
  ) { }

  ngOnInit(): void {
    this.links$ = this.entityName$.pipe(
      map((entityName) => {
        const parts = entityName.split('/');
        return this.getLinks(parts, this.metadata.entities[parts[0]]);
      })
    );
  }

  private getLinks(parts: string[], metadata: Partial<MatAdministrationEntity>, url = '/') {
    if (parts.length === 1) {
      return this.getPartUrls(parts[0], metadata, url, this.action);
    }

    return [
      ...this.getPartUrls(parts[0], metadata, url, 'list'),
      this.getItemUrl(parts[0], parts[1], metadata, url),
      ...this.getLinks(parts.slice(2), metadata.entities[parts[2]], `${url}${parts[0]}:${parts[1]}:`)
    ];
  }

  private getItemUrl(entity, itemId, metadata, baseUrl) {
    return {
      name: metadata.titleField || 'title',
      source: this.dataAdapterService.get(entity, itemId).pipe(map((data) => data?.[metadata.titleField || 'title'])),
      url: [`${baseUrl}${entity}/update/${itemId}`]
    };
  }

  private getPartUrls(part, metadata, baseUrl = '', action = 'list') {
    if (action === 'list') {
      return [
        {
          name: capitalize(metadata.plural),
          url: [`${baseUrl}${part}/list`]
        }
      ];
    }

    if (action === 'add') {
      return [
        {
          name: capitalize(metadata.plural),
          url: [`${baseUrl}${part}/list`]
        },
        {
          name: `Add ${metadata.single}`,
          url: null
        }
      ];
    }

    if (action === 'update') {
      return [
        {
          name: capitalize(metadata.plural),
          url: [`${baseUrl}${part}/list`]
        },
        {
          name: `Update ${metadata.single}`,
          url: null
        }
      ];
    }

    return [];
  }
}
