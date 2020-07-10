import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialCkeditorComponent } from './ckeditor.component';

@NgModule({
  declarations: [MaterialCkeditorComponent],
  imports: [CommonModule, CKEditorModule, ReactiveFormsModule, FormsModule],
  exports: [MaterialCkeditorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MatCkeditorModule {}
