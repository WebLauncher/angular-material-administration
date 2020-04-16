import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthenticatedGuard } from './authenticated.guard';


const routes: Routes = [{
  path: 'login',
  component: LoginComponent,
  pathMatch: 'full'
},
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
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
