import { NgModule } from '@angular/core';
import {
 Routes, RouterModule,
} from '@angular/router';
import { environment } from 'src/environments/environment';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'firebase',
    pathMatch: 'full',
  },
  {
    path: 'firebase',
    loadChildren: () => import('./firebase/firebase.module').then((m) => m.FirebaseModule),
  },
  {
    path: 'rest',
    loadChildren: () => import('./rest/rest.module').then((m) => m.RestModule),
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then((m) => m.FormModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: !environment.production })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
