import { Component, ChangeDetectionStrategy, Input, HostBinding, Optional, Self, ViewChild } from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/cdk/a11y";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/button";
const _c0 = ["file"];
function MatFileInputComponent_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 5, 6);
    i0.ɵɵlistener("change", function MatFileInputComponent_input_2_Template_input_change_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.onFilesAdded(); });
    i0.ɵɵelementEnd();
} }
function MatFileInputComponent_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 7, 6);
    i0.ɵɵlistener("change", function MatFileInputComponent_input_3_Template_input_change_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.onFilesAdded(); });
    i0.ɵɵelementEnd();
} }
export class MatFileInputComponent {
    constructor(ngControl, fb, fm, elRef) {
        this.ngControl = ngControl;
        this.fm = fm;
        this.elRef = elRef;
        this.id = `mat-file-input-${MatFileInputComponent.nextId++}`;
        this.placeholderValue = '';
        this.requiredValue = false;
        this.disabledValue = false;
        this.buttonText = 'Choose...';
        this.errorState = false;
        this.controlType = 'mat-material-file-input';
        this.describedBy = '';
        this.multiple = false;
        this.stateChanges = new Subject();
        this.focused = false;
        this.destroyed$ = new Subject();
        // Replace the provider from above with this.
        if (this.ngControl != null) {
            // Setting the value accessor directly (instead of using
            // the providers) to avoid running into a circular import.
            this.ngControl.valueAccessor = this;
        }
        this.form = new FormControl(null);
        this.form.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe(value => {
            if (this.onChange) {
                this.onChange(value);
            }
        });
        fm.monitor(elRef.nativeElement, true).subscribe(origin => {
            this.focused = !!origin;
            this.stateChanges.next();
        });
    }
    get shouldLabelFloat() {
        return this.focused || !this.empty;
    }
    get placeholder() {
        return this.placeholderValue;
    }
    set placeholder(plh) {
        this.placeholderValue = plh;
        this.stateChanges.next();
    }
    get required() {
        return this.requiredValue;
    }
    set required(req) {
        this.requiredValue = coerceBooleanProperty(req);
        this.stateChanges.next();
    }
    get disabled() { return this.disabledValue; }
    set disabled(value) {
        this.disabledValue = coerceBooleanProperty(value);
        this.disabledValue ? this.form.disable() : this.form.enable();
        this.stateChanges.next();
    }
    set value(value) {
        this.form.setValue(value);
        this.stateChanges.next();
    }
    get value() {
        return this.form.value;
    }
    get empty() {
        return !this.form.value;
    }
    ngOnDestroy() {
        this.stateChanges.complete();
        this.fm.stopMonitoring(this.elRef.nativeElement);
        this.destroyed$.next();
        this.destroyed$.complete();
    }
    onContainerClick(event) {
        if (event.target.tagName.toLowerCase() !== 'input') {
            this.elRef.nativeElement.querySelector('input').focus();
        }
    }
    setDescribedByIds(ids) {
        this.describedBy = ids.join(' ');
    }
    writeValue(value) {
        this.value = value;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched() { }
    openChooseFile() {
        if (this.value) {
            this.value = null;
            this.file.nativeElement.value = '';
        }
        this.file.nativeElement.click();
    }
    onFilesAdded() {
        const files = Object.values(this.file.nativeElement.files);
        this.value = files;
    }
    getName() {
        var _a;
        if (!this.value) {
            return '';
        }
        return this.multiple ? this.value.map(file => file === null || file === void 0 ? void 0 : file.name).join(', ') : (_a = this.value[0]) === null || _a === void 0 ? void 0 : _a.name;
    }
}
MatFileInputComponent.nextId = 0;
MatFileInputComponent.ɵfac = function MatFileInputComponent_Factory(t) { return new (t || MatFileInputComponent)(i0.ɵɵdirectiveInject(i1.NgControl, 10), i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.FocusMonitor), i0.ɵɵdirectiveInject(i0.ElementRef)); };
MatFileInputComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MatFileInputComponent, selectors: [["mat-file-input"]], viewQuery: function MatFileInputComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.file = _t.first);
    } }, hostVars: 4, hostBindings: function MatFileInputComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵhostProperty("id", ctx.id);
        i0.ɵɵattribute("aria-describedby", ctx.describedBy);
        i0.ɵɵclassProp("floating", ctx.shouldLabelFloat);
    } }, inputs: { placeholder: "placeholder", required: "required", disabled: "disabled", buttonText: "buttonText", multiple: "multiple" }, features: [i0.ɵɵProvidersFeature([{ provide: MatFormFieldControl, useExisting: MatFileInputComponent }])], decls: 6, vars: 5, consts: [[1, "mat-material-file-input-container", 3, "click"], ["readonly", "readonly", 1, "name", 3, "placeholder", "value"], ["type", "file", "style", "display: none", "multiple", "", 3, "change", 4, "ngIf"], ["type", "file", "style", "display: none", 3, "change", 4, "ngIf"], ["mat-stroked-button", ""], ["type", "file", "multiple", "", 2, "display", "none", 3, "change"], ["file", ""], ["type", "file", 2, "display", "none", 3, "change"]], template: function MatFileInputComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function MatFileInputComponent_Template_div_click_0_listener() { return ctx.openChooseFile(); });
        i0.ɵɵelement(1, "input", 1);
        i0.ɵɵtemplate(2, MatFileInputComponent_input_2_Template, 2, 0, "input", 2);
        i0.ɵɵtemplate(3, MatFileInputComponent_input_3_Template, 2, 0, "input", 3);
        i0.ɵɵelementStart(4, "button", 4);
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵpropertyInterpolate("placeholder", ctx.placeholder);
        i0.ɵɵproperty("value", ctx.getName());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.multiple);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.multiple);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.buttonText);
    } }, directives: [i3.NgIf, i4.MatButton], styles: [".mat-material-file-input-container[_ngcontent-%COMP%]{display:flex}span[_ngcontent-%COMP%]{opacity:0;transition:opacity .2s}.floating[_nghost-%COMP%]   span[_ngcontent-%COMP%]{opacity:1}input[_ngcontent-%COMP%]{border:none;background:0 0;padding:0;outline:0;font:inherit;flex-grow:1;text-align:left}button[_ngcontent-%COMP%]{line-height:normal}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MatFileInputComponent, [{
        type: Component,
        args: [{
                selector: 'mat-file-input',
                templateUrl: './material-file-input.component.html',
                styleUrls: ['./material-file-input.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{ provide: MatFormFieldControl, useExisting: MatFileInputComponent }],
            }]
    }], function () { return [{ type: i1.NgControl, decorators: [{
                type: Optional
            }, {
                type: Self
            }] }, { type: i1.FormBuilder }, { type: i2.FocusMonitor }, { type: i0.ElementRef }]; }, { id: [{
            type: HostBinding
        }], shouldLabelFloat: [{
            type: HostBinding,
            args: ['class.floating']
        }], placeholder: [{
            type: Input
        }], required: [{
            type: Input
        }], disabled: [{
            type: Input
        }], buttonText: [{
            type: Input
        }], describedBy: [{
            type: HostBinding,
            args: ['attr.aria-describedby']
        }], multiple: [{
            type: Input
        }], file: [{
            type: ViewChild,
            args: ['file']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0ZXJpYWwtZmlsZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXRlcmlhbC1maWxlLWlucHV0LyIsInNvdXJjZXMiOlsibGliL21hdGVyaWFsLWZpbGUtaW5wdXQuY29tcG9uZW50LnRzIiwibGliL21hdGVyaWFsLWZpbGUtaW5wdXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQWEsV0FBVyxFQUFjLFFBQVEsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pJLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUEwQixXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7OztJQ0F6QyxtQ0FPQTtJQUhPLDhMQUF5QjtJQUpoQyxpQkFPQTs7OztJQUFBLG1DQUtBO0lBRE8sOExBQXlCO0lBSmhDLGlCQUtBOztBREhGLE1BQU0sT0FBTyxxQkFBcUI7SUFtRWhDLFlBQzZCLFNBQW9CLEVBQy9DLEVBQWUsRUFDUCxFQUFnQixFQUNoQixLQUE4QjtRQUhYLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFFdkMsT0FBRSxHQUFGLEVBQUUsQ0FBYztRQUNoQixVQUFLLEdBQUwsS0FBSyxDQUF5QjtRQXJFekIsT0FBRSxHQUFHLGtCQUFrQixxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO1FBYy9ELHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQVV0QixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQVN0QixrQkFBYSxHQUFHLEtBQUss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Q0FBQztnQkFDbkQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxxQkFBcUIsRUFBRSxDQUFDO2FBQ2xGOztzQkFxRUksUUFBUTs7c0JBQUksSUFBSTs7a0JBbEVsQixXQUFXOztrQkFDWCxXQUFXO21CQUFDLGdCQUFnQjs7a0JBSzVCLEtBQUs7O2tCQVVMLEtBQUs7O2tCQVVMLEtBQUs7O2tCQVNMLEtBQUs7O2tCQUtMLFdBQVc7bUJBQUMsdUJBQXVCOztrQkFFbkMsS0FBSzs7a0JBbUJMLFNBQVM7bUJBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBPbkRlc3Ryb3ksIEhvc3RCaW5kaW5nLCBFbGVtZW50UmVmLCBPcHRpb25hbCwgU2VsZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdEZvcm1GaWVsZENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgTmdDb250cm9sLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21hdC1maWxlLWlucHV0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbWF0ZXJpYWwtZmlsZS1pbnB1dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbWF0ZXJpYWwtZmlsZS1pbnB1dC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTWF0Rm9ybUZpZWxkQ29udHJvbCwgdXNlRXhpc3Rpbmc6IE1hdEZpbGVJbnB1dENvbXBvbmVudCB9XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdEZpbGVJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgTWF0Rm9ybUZpZWxkQ29udHJvbDxGaWxlW10+e1xyXG4gIHN0YXRpYyBuZXh0SWQgPSAwO1xyXG4gIEBIb3N0QmluZGluZygpIGlkID0gYG1hdC1maWxlLWlucHV0LSR7TWF0RmlsZUlucHV0Q29tcG9uZW50Lm5leHRJZCsrfWA7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mbG9hdGluZycpXHJcbiAgZ2V0IHNob3VsZExhYmVsRmxvYXQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb2N1c2VkIHx8ICF0aGlzLmVtcHR5O1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgcGxhY2Vob2xkZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wbGFjZWhvbGRlclZhbHVlO1xyXG4gIH1cclxuICBzZXQgcGxhY2Vob2xkZXIocGxoKSB7XHJcbiAgICB0aGlzLnBsYWNlaG9sZGVyVmFsdWUgPSBwbGg7XHJcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XHJcbiAgfVxyXG4gIHByaXZhdGUgcGxhY2Vob2xkZXJWYWx1ZSA9ICcnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCByZXF1aXJlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcXVpcmVkVmFsdWU7XHJcbiAgfVxyXG4gIHNldCByZXF1aXJlZChyZXEpIHtcclxuICAgIHRoaXMucmVxdWlyZWRWYWx1ZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShyZXEpO1xyXG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xyXG4gIH1cclxuICBwcml2YXRlIHJlcXVpcmVkVmFsdWUgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmRpc2FibGVkVmFsdWU7IH1cclxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuZGlzYWJsZWRWYWx1ZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XHJcbiAgICB0aGlzLmRpc2FibGVkVmFsdWUgPyB0aGlzLmZvcm0uZGlzYWJsZSgpIDogdGhpcy5mb3JtLmVuYWJsZSgpO1xyXG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xyXG4gIH1cclxuICBwcml2YXRlIGRpc2FibGVkVmFsdWUgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgYnV0dG9uVGV4dCA9ICdDaG9vc2UuLi4nO1xyXG5cclxuICBlcnJvclN0YXRlID0gZmFsc2U7XHJcbiAgY29udHJvbFR5cGUgPSAnbWF0LW1hdGVyaWFsLWZpbGUtaW5wdXQnO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1kZXNjcmliZWRieScpIGRlc2NyaWJlZEJ5ID0gJyc7XHJcblxyXG4gIEBJbnB1dCgpIG11bHRpcGxlID0gZmFsc2U7XHJcbiAgb25DaGFuZ2U6ICh2YWx1ZSkgPT4gdm9pZDtcclxuICBmb3JtOiBGb3JtQ29udHJvbDtcclxuICBzdGF0ZUNoYW5nZXMgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIGZvY3VzZWQgPSBmYWxzZTtcclxuXHJcbiAgc2V0IHZhbHVlKHZhbHVlOiBGaWxlW10pIHtcclxuICAgIHRoaXMuZm9ybS5zZXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBnZXQgdmFsdWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGVtcHR5KCkge1xyXG4gICAgcmV0dXJuICF0aGlzLmZvcm0udmFsdWU7XHJcbiAgfVxyXG5cclxuICBAVmlld0NoaWxkKCdmaWxlJykgZmlsZTtcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcclxuICAgIGZiOiBGb3JtQnVpbGRlcixcclxuICAgIHByaXZhdGUgZm06IEZvY3VzTW9uaXRvcixcclxuICAgIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+XHJcbiAgKSB7XHJcbiAgICAvLyBSZXBsYWNlIHRoZSBwcm92aWRlciBmcm9tIGFib3ZlIHdpdGggdGhpcy5cclxuICAgIGlmICh0aGlzLm5nQ29udHJvbCAhPSBudWxsKSB7XHJcbiAgICAgIC8vIFNldHRpbmcgdGhlIHZhbHVlIGFjY2Vzc29yIGRpcmVjdGx5IChpbnN0ZWFkIG9mIHVzaW5nXHJcbiAgICAgIC8vIHRoZSBwcm92aWRlcnMpIHRvIGF2b2lkIHJ1bm5pbmcgaW50byBhIGNpcmN1bGFyIGltcG9ydC5cclxuICAgICAgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9ICh0aGlzIGFzIGFueSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUNvbnRyb2wobnVsbCk7XHJcbiAgICB0aGlzLmZvcm0udmFsdWVDaGFuZ2VzLnBpcGUoXHJcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpXHJcbiAgICApLnN1YnNjcmliZSh2YWx1ZSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLm9uQ2hhbmdlKSB7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZm0ubW9uaXRvcihlbFJlZi5uYXRpdmVFbGVtZW50LCB0cnVlKS5zdWJzY3JpYmUob3JpZ2luID0+IHtcclxuICAgICAgdGhpcy5mb2N1c2VkID0gISFvcmlnaW47XHJcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5mbS5zdG9wTW9uaXRvcmluZyh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveWVkJC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgb25Db250YWluZXJDbGljayhldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgaWYgKChldmVudC50YXJnZXQgYXMgRWxlbWVudCkudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnaW5wdXQnKSB7XHJcbiAgICAgIHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXREZXNjcmliZWRCeUlkcyhpZHM6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLmRlc2NyaWJlZEJ5ID0gaWRzLmpvaW4oJyAnKTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IEZpbGVbXSkge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHZvaWQpIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKCkgeyB9XHJcblxyXG4gIG9wZW5DaG9vc2VGaWxlKCkge1xyXG4gICAgaWYgKHRoaXMudmFsdWUpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgICAgIHRoaXMuZmlsZS5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XHJcbiAgICB9XHJcbiAgICB0aGlzLmZpbGUubmF0aXZlRWxlbWVudC5jbGljaygpO1xyXG4gIH1cclxuXHJcbiAgb25GaWxlc0FkZGVkKCkge1xyXG4gICAgY29uc3QgZmlsZXMgPSBPYmplY3QudmFsdWVzKHRoaXMuZmlsZS5uYXRpdmVFbGVtZW50LmZpbGVzKSBhcyBGaWxlW107XHJcbiAgICB0aGlzLnZhbHVlID0gZmlsZXM7XHJcbiAgfVxyXG5cclxuICBnZXROYW1lKCkge1xyXG4gICAgaWYgKCF0aGlzLnZhbHVlKSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5tdWx0aXBsZSA/IHRoaXMudmFsdWUubWFwKGZpbGUgPT4gZmlsZT8ubmFtZSkuam9pbignLCAnKSA6IHRoaXMudmFsdWVbMF0/Lm5hbWU7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJtYXQtbWF0ZXJpYWwtZmlsZS1pbnB1dC1jb250YWluZXJcIlxyXG4gICAgIChjbGljayk9XCJvcGVuQ2hvb3NlRmlsZSgpXCI+XHJcbiAgPGlucHV0IHBsYWNlaG9sZGVyPVwie3twbGFjZWhvbGRlcn19XCJcclxuICAgICAgICAgY2xhc3M9XCJuYW1lXCJcclxuICAgICAgICAgW3ZhbHVlXT1cImdldE5hbWUoKVwiXHJcbiAgICAgICAgIHJlYWRvbmx5PVwicmVhZG9ubHlcIiAvPlxyXG4gIDxpbnB1dCAqbmdJZj1cIm11bHRpcGxlXCJcclxuICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAjZmlsZVxyXG4gICAgICAgICBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIlxyXG4gICAgICAgICAoY2hhbmdlKT1cIm9uRmlsZXNBZGRlZCgpXCJcclxuICAgICAgICAgbXVsdGlwbGUgLz5cclxuXHJcbiAgPGlucHV0ICpuZ0lmPVwiIW11bHRpcGxlXCJcclxuICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAjZmlsZVxyXG4gICAgICAgICBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIlxyXG4gICAgICAgICAoY2hhbmdlKT1cIm9uRmlsZXNBZGRlZCgpXCIgLz5cclxuICA8YnV0dG9uIG1hdC1zdHJva2VkLWJ1dHRvbj57e2J1dHRvblRleHR9fTwvYnV0dG9uPlxyXG48L2Rpdj5cclxuIl19