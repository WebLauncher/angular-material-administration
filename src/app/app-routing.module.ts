import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticatedGuard } from './authenticated.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./site/site.module').then(m => m.SiteModule),
    canActivate: [AuthenticatedGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
