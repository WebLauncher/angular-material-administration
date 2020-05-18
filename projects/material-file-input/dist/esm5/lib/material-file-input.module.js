import { NgModule } from '@angular/core';
import { MatFileInputComponent } from './material-file-input.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
var MatFileInputModule = /** @class */ (function () {
    function MatFileInputModule() {
    }
    MatFileInputModule.ɵmod = i0.ɵɵdefineNgModule({ type: MatFileInputModule });
    MatFileInputModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MatFileInputModule_Factory(t) { return new (t || MatFileInputModule)(); }, imports: [[
                CommonModule,
                MatInputModule,
                MatButtonModule,
                ReactiveFormsModule,
                FormsModule
            ]] });
    return MatFileInputModule;
}());
export { MatFileInputModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MatFileInputModule, { declarations: [MatFileInputComponent], imports: [CommonModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        FormsModule], exports: [MatFileInputComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MatFileInputModule, [{
        type: NgModule,
        args: [{
                declarations: [MatFileInputComponent],
                imports: [
                    CommonModule,
                    MatInputModule,
                    MatButtonModule,
                    ReactiveFormsModule,
                    FormsModule
                ],
                exports: [MatFileInputComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0ZXJpYWwtZmlsZS1pbnB1dC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXRlcmlhbC1maWxlLWlucHV0LyIsInNvdXJjZXMiOlsibGliL21hdGVyaWFsLWZpbGUtaW5wdXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUkvQztJQUFBO0tBV21DOzBEQUF0QixrQkFBa0I7dUhBQWxCLGtCQUFrQixrQkFUcEI7Z0JBQ1AsWUFBWTtnQkFDWixjQUFjO2dCQUNkLGVBQWU7Z0JBQ2YsbUJBQW1CO2dCQUNuQixXQUFXO2FBQ1o7NkJBakJIO0NBb0JtQyxBQVhuQyxJQVdtQztTQUF0QixrQkFBa0I7d0ZBQWxCLGtCQUFrQixtQkFWZCxxQkFBcUIsYUFFbEMsWUFBWTtRQUNaLGNBQWM7UUFDZCxlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLFdBQVcsYUFFSCxxQkFBcUI7a0RBRXBCLGtCQUFrQjtjQVg5QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ3JDLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixtQkFBbUI7b0JBQ25CLFdBQVc7aUJBQ1o7Z0JBQ0QsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUM7YUFDakMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RmlsZUlucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9tYXRlcmlhbC1maWxlLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtNYXRGaWxlSW5wdXRDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtNYXRGaWxlSW5wdXRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE1hdEZpbGVJbnB1dE1vZHVsZSB7IH1cbiJdfQ==