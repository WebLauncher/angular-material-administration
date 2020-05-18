import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
export class SnackbarService {
    constructor(snackbar) {
        this.snackbar = snackbar;
    }
    error(message) {
        this.snackbar.open(message, 'Close', {
            duration: 3000,
            panelClass: 'snackbar-error'
        });
    }
    success(message) {
        this.snackbar.open(message, 'Close', {
            duration: 3000,
            panelClass: 'snackbar-success'
        });
    }
}
SnackbarService.ɵfac = function SnackbarService_Factory(t) { return new (t || SnackbarService)(i0.ɵɵinject(i1.MatSnackBar)); };
SnackbarService.ɵprov = i0.ɵɵdefineInjectable({ token: SnackbarService, factory: SnackbarService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SnackbarService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.MatSnackBar }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2tiYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdGVyaWFsLWFkbWluaXN0cmF0aW9uLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3NuYWNrYmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBTTNDLE1BQU0sT0FBTyxlQUFlO0lBRTFCLFlBQ1UsUUFBcUI7UUFBckIsYUFBUSxHQUFSLFFBQVEsQ0FBYTtJQUMzQixDQUFDO0lBRUwsS0FBSyxDQUFDLE9BQU87UUFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUcsT0FBTyxFQUFFO1lBQ3BDLFFBQVEsRUFBRSxJQUFJO1lBQ2QsVUFBVSxFQUFFLGdCQUFnQjtTQUM3QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUcsT0FBTyxFQUFFO1lBQ3BDLFFBQVEsRUFBRSxJQUFJO1lBQ2QsVUFBVSxFQUFFLGtCQUFrQjtTQUMvQixDQUFDLENBQUM7SUFDTCxDQUFDOzs4RUFsQlUsZUFBZTt1REFBZixlQUFlLFdBQWYsZUFBZSxtQkFGZCxNQUFNO2tEQUVQLGVBQWU7Y0FIM0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTbmFja2JhclNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc25hY2tiYXI6IE1hdFNuYWNrQmFyXG4gICkgeyB9XG5cbiAgZXJyb3IobWVzc2FnZSkge1xuICAgIHRoaXMuc25hY2tiYXIub3BlbihtZXNzYWdlLCAgJ0Nsb3NlJywge1xuICAgICAgZHVyYXRpb246IDMwMDAsXG4gICAgICBwYW5lbENsYXNzOiAnc25hY2tiYXItZXJyb3InXG4gICAgfSk7XG4gIH1cblxuICBzdWNjZXNzKG1lc3NhZ2UpIHtcbiAgICB0aGlzLnNuYWNrYmFyLm9wZW4obWVzc2FnZSwgICdDbG9zZScsIHtcbiAgICAgIGR1cmF0aW9uOiAzMDAwLFxuICAgICAgcGFuZWxDbGFzczogJ3NuYWNrYmFyLXN1Y2Nlc3MnXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==