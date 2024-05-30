import { Routes } from '@angular/router';
import {
 ListComponent, AddComponent, UpdateComponent,
} from './components/index';
import { NoPathGuard } from './services/index';

export const materialAdministrationRoutes: Routes = [
  {
    path: ':entity/list',
    component: ListComponent,
  },
  {
    path: ':entity/add',
    component: AddComponent,
  },
  {
    path: ':entity/update/:id',
    component: UpdateComponent,
  },
  {
    path: ':entity',
    redirectTo: ':entity/list',
  },
  {
    path: '',
    canActivate: [NoPathGuard],
    component: ListComponent,
  },
];
