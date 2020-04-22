import { Routes } from '@angular/router';
import { ListComponent, AddComponent, UpdateComponent } from '@weblauncher/material-administration';

export const siteRoutes: Routes = [
  {
    path: ':collection/list',
    component: ListComponent,
    data: { animation: 'list' }
  },
  {
    path: ':collection/add',
    component: AddComponent,
    data: { animation: 'edit' }
  },
  {
    path: ':collection/update/:id',
    component: UpdateComponent,
    data: { animation: 'edit' }
  },
  {
    path: ':collection',
    redirectTo: ':collection/list'
  }];
