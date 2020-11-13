import { Component } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { SiteMetadata } from '../site-metadata';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  entities: any = Object.keys(SiteMetadata.entities)
    .filter((key: any) => !SiteMetadata.entities[key]?.hideList)
    .map((key) => {
      return {
        id: key,
        ...SiteMetadata.entities[key]
      };
    });

  dataSource = document.location.href.includes('/firebase') ? 'firebase' : 'rest';

  changeDataSource(event: MatButtonToggleChange) {
    this.dataSource = event.value;
    document.location.href = `/${this.dataSource}`;
  }
}
