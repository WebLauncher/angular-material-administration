import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MarkdownModule } from 'ngx-markdown';
import { MatFormModule } from '@weblauncher/material-form';
import { MatCardModule } from '@angular/material/card';
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { FormMenuComponent } from './components/form-menu/form-menu.component';
import { FormExample1Component } from './components/form-examples/form-example1.component';
import { FormExample2Component } from './components/form-examples/form-example2.component';

@NgModule({
  declarations: [
    FormComponent,
    FormMenuComponent,
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    MatListModule,
    MatFormModule,
    MatCardModule,
    MarkdownModule.forChild(),
    FormExample1Component,
    FormExample2Component,
  ],
})
export class FormModule { }
