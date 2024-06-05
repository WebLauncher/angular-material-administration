import { Routes } from '@angular/router';
import { FormComponent } from './form.component';
import { FormMenuComponent } from './components/form-menu/form-menu.component';

export const formRoutes: Routes = [
  {
    path: ':tab',
    component: FormComponent,
  },
  {
    path: '',
    component: FormMenuComponent,
    outlet: 'menu',
  },
];
