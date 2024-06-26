import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackbar: MatSnackBar) {}

  error(message: any) {
    this.snackbar.open(message, 'Close', {
      duration: 3000,
      panelClass: 'snackbar-error',
    });
  }

  success(message: any) {
    this.snackbar.open(message, 'Close', {
      duration: 3000,
      panelClass: 'snackbar-success',
    });
  }
}
