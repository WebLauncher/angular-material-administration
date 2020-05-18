import { NgModule } from '@angular/core';
import { MatFileInputComponent } from './material-file-input.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
export class MatFileInputModule {
}
MatFileInputModule.ɵmod = i0.ɵɵdefineNgModule({ type: MatFileInputModule });
MatFileInputModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MatFileInputModule_Factory(t) { return new (t || MatFileInputModule)(); }, imports: [[
            CommonModule,
            MatInputModule,
            MatButtonModule,
            ReactiveFormsModule,
            FormsModule
        ]] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0ZXJpYWwtZmlsZS1pbnB1dC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXRlcmlhbC1maWxlLWlucHV0LyIsInNvdXJjZXMiOlsibGliL21hdGVyaWFsLWZpbGUtaW5wdXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQWUvQyxNQUFNLE9BQU8sa0JBQWtCOztzREFBbEIsa0JBQWtCO21IQUFsQixrQkFBa0Isa0JBVHBCO1lBQ1AsWUFBWTtZQUNaLGNBQWM7WUFDZCxlQUFlO1lBQ2YsbUJBQW1CO1lBQ25CLFdBQVc7U0FDWjt3RkFHVSxrQkFBa0IsbUJBVmQscUJBQXFCLGFBRWxDLFlBQVk7UUFDWixjQUFjO1FBQ2QsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixXQUFXLGFBRUgscUJBQXFCO2tEQUVwQixrQkFBa0I7Y0FYOUIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dCQUNyQyxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixjQUFjO29CQUNkLGVBQWU7b0JBQ2YsbUJBQW1CO29CQUNuQixXQUFXO2lCQUNaO2dCQUNELE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO2FBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdEZpbGVJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vbWF0ZXJpYWwtZmlsZS1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSwgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTWF0RmlsZUlucHV0Q29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbTWF0RmlsZUlucHV0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBNYXRGaWxlSW5wdXRNb2R1bGUgeyB9XG4iXX0=