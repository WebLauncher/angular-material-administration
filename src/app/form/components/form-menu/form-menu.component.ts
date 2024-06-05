import {
 ChangeDetectionStrategy, Component,
} from '@angular/core';

@Component({
  selector: 'app-form-menu',
  templateUrl: 'form-menu.component.html',
  styleUrls: ['./form-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FormMenuComponent {
  constructor() { }
}
