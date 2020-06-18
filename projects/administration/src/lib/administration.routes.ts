import { Routes } from '@angular/router';
import { ListComponent, AddComponent, UpdateComponent } from './components';
import { NoPathGuard } from './services';

export const materialAdministrationRoutes: Routes = [
  {
    path: ':collection/list',
    component: ListComponent
  },
  {
    path: ':collection/add',
    component: AddComponent
  },
  {
    path: ':collection/update/:id',
    component: UpdateComponent
  },
  {
    path: ':collection',
    redirectTo: ':collection/list'
  },
  {
    path: '**',
    canActivate: [NoPathGuard]
  }
];
