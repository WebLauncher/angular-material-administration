import { Component } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  dataSource = document.location.href.includes('/firebase') ? 'firebase' : 'rest';

  changeDataSource(event: MatButtonToggleChange) {
    this.dataSource = event.value;
    document.location.href = `/${this.dataSource}`;
  }
}
