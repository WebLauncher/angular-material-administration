import { NgModule } from '@angular/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialCkeditorComponent } from './material-ckeditor.component';

@NgModule({
  declarations: [MaterialCkeditorComponent],
  imports: [CommonModule, CKEditorModule, ReactiveFormsModule, FormsModule],
  exports: [MaterialCkeditorComponent]
})
export class MatCkeditorModule {}
