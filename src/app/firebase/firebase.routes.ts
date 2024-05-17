import { Routes } from '@angular/router';
import { materialAdministrationRoutes, MenuComponent } from '@weblauncher/material-administration';

export const firebaseRoutes: Routes = [
  ...materialAdministrationRoutes,
  {
    path: '',
    component: MenuComponent,
    outlet: 'menu'
  }
];
