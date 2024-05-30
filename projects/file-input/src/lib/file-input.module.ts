import {
 NgModule, CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
 ReactiveFormsModule, FormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFileInputComponent } from './file-input.component';

@NgModule({
  declarations: [MatFileInputComponent],
  imports: [CommonModule, MatInputModule, MatButtonModule, ReactiveFormsModule, FormsModule],
  exports: [MatFileInputComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MatFileInputModule {}
