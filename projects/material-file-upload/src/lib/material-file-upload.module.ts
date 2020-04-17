import { NgModule } from '@angular/core';
import { MatFileUploadComponent } from './material-file-upload.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [MatFileUploadComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [MatFileUploadComponent]
})
export class FileUploadModule { }
