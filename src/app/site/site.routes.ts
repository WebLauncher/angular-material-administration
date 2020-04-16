import { Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';

export const siteRoutes: Routes = [
  {
    path: ':collection/list',
    component: ListComponent,
    data: { animation: 'heroes' }
  },
  {
    path: ':collection/create',
    component: CreateComponent,
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
