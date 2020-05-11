import { Component, OnInit, Input, Optional, Inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MatAdministrationEntity, MatAdministrationMetadata } from '../../types';
import { capitalize } from 'lodash';
import { map } from 'rxjs/operators';
import { DataAdapterService } from '../../services';

@Component({
  selector: 'mat-administration-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  @Input() set collectionName(value: string) {
    this.collectionName$.next(value);
  }
  get collectionName() {
    return this.collectionName$.getValue();
  }

  @Input() action: 'add' | 'update' | 'list';

  links$: Observable<any>;

  private collectionName$ = new BehaviorSubject('');

  constructor(
    @Optional() @Inject('MAT_ADMINISTRATION_METADATA') public metadata: MatAdministrationMetadata,
    public dataAdapterService: DataAdapterService
  ) { }

  ngOnInit(): void {
    this.links$ = this.collectionName$.pipe(
      map(collectionName => {
        const parts = collectionName.split('/');
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

  private getItemUrl(collection, itemId, metadata, baseUrl) {
    return {
      name: metadata.titleField || 'title',
      source: this.dataAdapterService.get(collection, itemId).pipe(map(data => data?.[metadata.titleField || 'title'])),
      url: [`${baseUrl}${collection}/update/${itemId}`]
    };
  }

  private getPartUrls(part, metadata, baseUrl = '', action = 'list', itemId = '') {
    if (action === 'list') {
      return [{
        name: capitalize(metadata.plural),
        url: [`${baseUrl}${part}/list`]
      }];
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
  }
}
