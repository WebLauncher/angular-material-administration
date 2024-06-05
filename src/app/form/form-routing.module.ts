import { NgModule } from '@angular/core';
import {
 RouterModule, Routes,
} from '@angular/router';
import { formRoutes } from './form.routes';

const routes: Routes = formRoutes;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRoutingModule { }
