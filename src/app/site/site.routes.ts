import { Routes } from '@angular/router';
import { ListComponent, AddComponent, UpdateComponent } from '@weblauncher/material-administration';

export const siteRoutes: Routes = [
  {
    path: ':collection/list',
    component: ListComponent,
    data: { animation: 'heroes' }
  },
  {
    path: ':collection/add',
    component: AddComponent,
    data: { animation: 'hero' }
  },
  {
    path: ':collection/update/:id',
    component: UpdateComponent,
    data: { animation: 'hero' }
  },
  {
    path: ':collection',
    redirectTo: ':collection/list'
  }];
