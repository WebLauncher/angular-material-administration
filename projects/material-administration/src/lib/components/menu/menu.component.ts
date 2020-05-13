import { Component, OnInit, Optional, Inject } from '@angular/core';

@Component({
  selector: 'mat-administration-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  entities = Object.keys(this.metadata?.entities).filter((key: any) => !this.metadata.entities[key]?.hideList).map(key => {
    return {
      id: key,
      ...this.metadata.entities[key]
    };
  });

  constructor(
    @Optional() @Inject('MAT_ADMINISTRATION_METADATA') private metadata: any
  ) { }
}
