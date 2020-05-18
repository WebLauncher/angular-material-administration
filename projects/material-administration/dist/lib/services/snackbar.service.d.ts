import { MatSnackBar } from '@angular/material/snack-bar';
import * as i0 from "@angular/core";
export declare class SnackbarService {
    private snackbar;
    constructor(snackbar: MatSnackBar);
    error(message: any): void;
    success(message: any): void;
    static ɵfac: i0.ɵɵFactoryDef<SnackbarService, never>;
    static ɵprov: i0.ɵɵInjectableDef<SnackbarService>;
}
