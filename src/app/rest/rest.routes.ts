import { Routes } from '@angular/router';
import { materialAdministrationRoutes } from '@weblauncher/material-administration';
import { MenuComponent } from 'projects/administration/src';

export const siteRoutes: Routes = [
  ...materialAdministrationRoutes,
  {
    path: '',
    component: MenuComponent,
    outlet: 'menu'
  }
];
