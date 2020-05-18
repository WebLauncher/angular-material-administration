import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
var SnackbarService = /** @class */ (function () {
    function SnackbarService(snackbar) {
        this.snackbar = snackbar;
    }
    SnackbarService.prototype.error = function (message) {
        this.snackbar.open(message, 'Close', {
            duration: 3000,
            panelClass: 'snackbar-error'
        });
    };
    SnackbarService.prototype.success = function (message) {
        this.snackbar.open(message, 'Close', {
            duration: 3000,
            panelClass: 'snackbar-success'
        });
    };
    SnackbarService.ɵfac = function SnackbarService_Factory(t) { return new (t || SnackbarService)(i0.ɵɵinject(i1.MatSnackBar)); };
    SnackbarService.ɵprov = i0.ɵɵdefineInjectable({ token: SnackbarService, factory: SnackbarService.ɵfac, providedIn: 'root' });
    return SnackbarService;
}());
export { SnackbarService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SnackbarService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.MatSnackBar }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2tiYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdGVyaWFsLWFkbWluaXN0cmF0aW9uLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3NuYWNrYmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBRzNDO0lBS0UseUJBQ1UsUUFBcUI7UUFBckIsYUFBUSxHQUFSLFFBQVEsQ0FBYTtJQUMzQixDQUFDO0lBRUwsK0JBQUssR0FBTCxVQUFNLE9BQU87UUFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUcsT0FBTyxFQUFFO1lBQ3BDLFFBQVEsRUFBRSxJQUFJO1lBQ2QsVUFBVSxFQUFFLGdCQUFnQjtTQUM3QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsaUNBQU8sR0FBUCxVQUFRLE9BQU87UUFDYixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUcsT0FBTyxFQUFFO1lBQ3BDLFFBQVEsRUFBRSxJQUFJO1lBQ2QsVUFBVSxFQUFFLGtCQUFrQjtTQUMvQixDQUFDLENBQUM7SUFDTCxDQUFDO2tGQWxCVSxlQUFlOzJEQUFmLGVBQWUsV0FBZixlQUFlLG1CQUZkLE1BQU07MEJBSnBCO0NBeUJDLEFBdEJELElBc0JDO1NBbkJZLGVBQWU7a0RBQWYsZUFBZTtjQUgzQixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNuYWNrYmFyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzbmFja2JhcjogTWF0U25hY2tCYXJcbiAgKSB7IH1cblxuICBlcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5zbmFja2Jhci5vcGVuKG1lc3NhZ2UsICAnQ2xvc2UnLCB7XG4gICAgICBkdXJhdGlvbjogMzAwMCxcbiAgICAgIHBhbmVsQ2xhc3M6ICdzbmFja2Jhci1lcnJvcidcbiAgICB9KTtcbiAgfVxuXG4gIHN1Y2Nlc3MobWVzc2FnZSkge1xuICAgIHRoaXMuc25hY2tiYXIub3BlbihtZXNzYWdlLCAgJ0Nsb3NlJywge1xuICAgICAgZHVyYXRpb246IDMwMDAsXG4gICAgICBwYW5lbENsYXNzOiAnc25hY2tiYXItc3VjY2VzcydcbiAgICB9KTtcbiAgfVxufVxuIl19