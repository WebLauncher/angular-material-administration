import { CommonModule } from '@angular/common';
import {
 ChangeDetectionStrategy, Component,
} from '@angular/core';
import {
  EntityFieldInputType,
  MatFormEntityField,
  MatFormModule,
  MatFormSectionsLayout,
} from '@weblauncher/material-form';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-form-example1',
  template: `<mat-form [fields]="loginFields" [layout]="layout$ | async" saveBtnText="Login"></mat-form>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, MatFormModule],
})
export class FormExample1Component {
  loginFields: Partial<MatFormEntityField>[] = [
    {
      name: 'email',
      label: 'Email',
      inputType: EntityFieldInputType.Text,
    },
    {
      name: 'password',
      label: 'Password',
      inputType: EntityFieldInputType.Password,
    },
    {
      name: 'remember',
      label: 'Remember me',
      inputType: EntityFieldInputType.Checkbox,
    },
  ];

  rowLayout: MatFormSectionsLayout = {
    sections: [{
      fields: ['email', 'password'],
      layout: {
        gap: '1rem',
        direction: 'row',
      },
    }],
  };

  layout$ = new BehaviorSubject<MatFormSectionsLayout | undefined>(undefined);

  constructor() {}
}
