import { NgModule } from '@angular/core';
import {
 Routes, RouterModule,
} from '@angular/router';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
