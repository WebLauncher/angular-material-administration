import { Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { UpdateComponent } from './components/update/update.component';

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
