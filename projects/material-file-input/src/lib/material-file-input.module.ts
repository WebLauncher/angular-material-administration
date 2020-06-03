import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFileInputComponent } from './material-file-input.component';

@NgModule({
  declarations: [MatFileInputComponent],
  imports: [CommonModule, MatInputModule, MatButtonModule, ReactiveFormsModule, FormsModule],
  exports: [MatFileInputComponent]
})
export class MatFileInputModule {}
