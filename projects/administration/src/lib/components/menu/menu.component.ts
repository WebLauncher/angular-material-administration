import { Component, Optional, Inject } from '@angular/core';
import { MAT_ADMINISTRATION_METADATA } from '../../types/injection-tokens';
import { MatAdministrationMetadata } from '../../types/material-administration-metadata';

@Component({
  selector: 'mat-administration-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  entities = this.metadata?.entities
    ? Object.keys(this.metadata?.entities)
        .filter((key: any) => !this.metadata?.entities[key]?.hideList)
        .map((key) => {
          return {
            id: key,
            ...this.metadata.entities[key]
          };
        })
    : [];

  constructor(@Optional() @Inject(MAT_ADMINISTRATION_METADATA) private metadata: MatAdministrationMetadata) {}
}
