import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { ListComponent, AddComponent, UpdateComponent, MetadataComponent, FormComponent } from './components/index';
import { ValueFormatService } from './services/value-format.service';
import { CdkTableModule } from '@angular/cdk/table';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFileInputModule } from '@weblauncher/material-file-input';
import { moduleRoutes } from './material-administration.routes';

@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    UpdateComponent,
    MetadataComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    MatChipsModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule.forChild(moduleRoutes),
    MatProgressSpinnerModule,
    CdkTableModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatFileInputModule,
    MatButtonModule,
    CKEditorModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatFileInputModule
  ],
  providers: [
    ValueFormatService,
    DatePipe
  ],
  exports: [
    ListComponent,
    AddComponent,
    UpdateComponent,
    MetadataComponent,
    FormComponent,
    RouterModule
  ]
})
export class MaterialAdministrationModule { }
