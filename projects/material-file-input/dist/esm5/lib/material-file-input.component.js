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
var _c0 = ["file"];
function MatFileInputComponent_input_2_Template(rf, ctx) { if (rf & 1) {
    var _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 5, 6);
    i0.ɵɵlistener("change", function MatFileInputComponent_input_2_Template_input_change_0_listener() { i0.ɵɵrestoreView(_r4); var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.onFilesAdded(); });
    i0.ɵɵelementEnd();
} }
function MatFileInputComponent_input_3_Template(rf, ctx) { if (rf & 1) {
    var _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 7, 6);
    i0.ɵɵlistener("change", function MatFileInputComponent_input_3_Template_input_change_0_listener() { i0.ɵɵrestoreView(_r7); var ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.onFilesAdded(); });
    i0.ɵɵelementEnd();
} }
var MatFileInputComponent = /** @class */ (function () {
    function MatFileInputComponent(ngControl, fb, fm, elRef) {
        var _this = this;
        this.ngControl = ngControl;
        this.fm = fm;
        this.elRef = elRef;
        this.id = "mat-file-input-" + MatFileInputComponent.nextId++;
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
        this.form.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe(function (value) {
            if (_this.onChange) {
                _this.onChange(value);
            }
        });
        fm.monitor(elRef.nativeElement, true).subscribe(function (origin) {
            _this.focused = !!origin;
            _this.stateChanges.next();
        });
    }
    Object.defineProperty(MatFileInputComponent.prototype, "shouldLabelFloat", {
        get: function () {
            return this.focused || !this.empty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatFileInputComponent.prototype, "placeholder", {
        get: function () {
            return this.placeholderValue;
        },
        set: function (plh) {
            this.placeholderValue = plh;
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatFileInputComponent.prototype, "required", {
        get: function () {
            return this.requiredValue;
        },
        set: function (req) {
            this.requiredValue = coerceBooleanProperty(req);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatFileInputComponent.prototype, "disabled", {
        get: function () { return this.disabledValue; },
        set: function (value) {
            this.disabledValue = coerceBooleanProperty(value);
            this.disabledValue ? this.form.disable() : this.form.enable();
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatFileInputComponent.prototype, "value", {
        get: function () {
            return this.form.value;
        },
        set: function (value) {
            this.form.setValue(value);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatFileInputComponent.prototype, "empty", {
        get: function () {
            return !this.form.value;
        },
        enumerable: true,
        configurable: true
    });
    MatFileInputComponent.prototype.ngOnDestroy = function () {
        this.stateChanges.complete();
        this.fm.stopMonitoring(this.elRef.nativeElement);
        this.destroyed$.next();
        this.destroyed$.complete();
    };
    MatFileInputComponent.prototype.onContainerClick = function (event) {
        if (event.target.tagName.toLowerCase() !== 'input') {
            this.elRef.nativeElement.querySelector('input').focus();
        }
    };
    MatFileInputComponent.prototype.setDescribedByIds = function (ids) {
        this.describedBy = ids.join(' ');
    };
    MatFileInputComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    MatFileInputComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    MatFileInputComponent.prototype.registerOnTouched = function () { };
    MatFileInputComponent.prototype.openChooseFile = function () {
        if (this.value) {
            this.value = null;
            this.file.nativeElement.value = '';
        }
        this.file.nativeElement.click();
    };
    MatFileInputComponent.prototype.onFilesAdded = function () {
        var files = Object.values(this.file.nativeElement.files);
        this.value = files;
    };
    MatFileInputComponent.prototype.getName = function () {
        var _a;
        if (!this.value) {
            return '';
        }
        return this.multiple ? this.value.map(function (file) { return file === null || file === void 0 ? void 0 : file.name; }).join(', ') : (_a = this.value[0]) === null || _a === void 0 ? void 0 : _a.name;
    };
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
    return MatFileInputComponent;
}());
export { MatFileInputComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0ZXJpYWwtZmlsZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXRlcmlhbC1maWxlLWlucHV0LyIsInNvdXJjZXMiOlsibGliL21hdGVyaWFsLWZpbGUtaW5wdXQuY29tcG9uZW50LnRzIiwibGliL21hdGVyaWFsLWZpbGUtaW5wdXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQWEsV0FBVyxFQUFjLFFBQVEsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pJLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUEwQixXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7OztJQ0F6QyxtQ0FPQTtJQUhPLDRMQUF5QjtJQUpoQyxpQkFPQTs7OztJQUFBLG1DQUtBO0lBRE8sNExBQXlCO0lBSmhDLGlCQUtBOztBRFZGO0lBMEVFLCtCQUM2QixTQUFvQixFQUMvQyxFQUFlLEVBQ1AsRUFBZ0IsRUFDaEIsS0FBOEI7UUFKeEMsaUJBd0JDO1FBdkI0QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBRXZDLE9BQUUsR0FBRixFQUFFLENBQWM7UUFDaEIsVUFBSyxHQUFMLEtBQUssQ0FBeUI7UUFyRXpCLE9BQUUsR0FBRyxvQkFBa0IscUJBQXFCLENBQUMsTUFBTSxFQUFJLENBQUM7UUFjL0QscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBVXRCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBU3RCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FB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SUFtSkM7U0E1SVkscUJBQXFCO2tEQUFyQixxQkFBcUI7Y0FQakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFdBQVcsRUFBRSxzQ0FBc0M7Z0JBQ25ELFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO2dCQUNuRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLHFCQUFxQixFQUFFLENBQUM7YUFDbEY7O3NCQXFFSSxRQUFROztzQkFBSSxJQUFJOztrQkFsRWxCLFdBQVc7O2tCQUNYLFdBQVc7bUJBQUMsZ0JBQWdCOztrQkFLNUIsS0FBSzs7a0JBVUwsS0FBSzs7a0JBVUwsS0FBSzs7a0JBU0wsS0FBSzs7a0JBS0wsV0FBVzttQkFBQyx1QkFBdUI7O2tCQUVuQyxLQUFLOztrQkFtQkwsU0FBUzttQkFBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIE9uRGVzdHJveSwgSG9zdEJpbmRpbmcsIEVsZW1lbnRSZWYsIE9wdGlvbmFsLCBTZWxmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBOZ0NvbnRyb2wsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBGb2N1c01vbml0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XHJcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbWF0LWZpbGUtaW5wdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXRlcmlhbC1maWxlLWlucHV0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tYXRlcmlhbC1maWxlLWlucHV0LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBNYXRGb3JtRmllbGRDb250cm9sLCB1c2VFeGlzdGluZzogTWF0RmlsZUlucHV0Q29tcG9uZW50IH1dLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0RmlsZUlucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBNYXRGb3JtRmllbGRDb250cm9sPEZpbGVbXT57XHJcbiAgc3RhdGljIG5leHRJZCA9IDA7XHJcbiAgQEhvc3RCaW5kaW5nKCkgaWQgPSBgbWF0LWZpbGUtaW5wdXQtJHtNYXRGaWxlSW5wdXRDb21wb25lbnQubmV4dElkKyt9YDtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZsb2F0aW5nJylcclxuICBnZXQgc2hvdWxkTGFiZWxGbG9hdCgpIHtcclxuICAgIHJldHVybiB0aGlzLmZvY3VzZWQgfHwgIXRoaXMuZW1wdHk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCBwbGFjZWhvbGRlcigpIHtcclxuICAgIHJldHVybiB0aGlzLnBsYWNlaG9sZGVyVmFsdWU7XHJcbiAgfVxyXG4gIHNldCBwbGFjZWhvbGRlcihwbGgpIHtcclxuICAgIHRoaXMucGxhY2Vob2xkZXJWYWx1ZSA9IHBsaDtcclxuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBwbGFjZWhvbGRlclZhbHVlID0gJyc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHJlcXVpcmVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWlyZWRWYWx1ZTtcclxuICB9XHJcbiAgc2V0IHJlcXVpcmVkKHJlcSkge1xyXG4gICAgdGhpcy5yZXF1aXJlZFZhbHVlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHJlcSk7XHJcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XHJcbiAgfVxyXG4gIHByaXZhdGUgcmVxdWlyZWRWYWx1ZSA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuZGlzYWJsZWRWYWx1ZTsgfVxyXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5kaXNhYmxlZFZhbHVlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcclxuICAgIHRoaXMuZGlzYWJsZWRWYWx1ZSA/IHRoaXMuZm9ybS5kaXNhYmxlKCkgOiB0aGlzLmZvcm0uZW5hYmxlKCk7XHJcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XHJcbiAgfVxyXG4gIHByaXZhdGUgZGlzYWJsZWRWYWx1ZSA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBidXR0b25UZXh0ID0gJ0Nob29zZS4uLic7XHJcblxyXG4gIGVycm9yU3RhdGUgPSBmYWxzZTtcclxuICBjb250cm9sVHlwZSA9ICdtYXQtbWF0ZXJpYWwtZmlsZS1pbnB1dCc7XHJcblxyXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWRlc2NyaWJlZGJ5JykgZGVzY3JpYmVkQnkgPSAnJztcclxuXHJcbiAgQElucHV0KCkgbXVsdGlwbGUgPSBmYWxzZTtcclxuICBvbkNoYW5nZTogKHZhbHVlKSA9PiB2b2lkO1xyXG4gIGZvcm06IEZvcm1Db250cm9sO1xyXG4gIHN0YXRlQ2hhbmdlcyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgZm9jdXNlZCA9IGZhbHNlO1xyXG5cclxuICBzZXQgdmFsdWUodmFsdWU6IEZpbGVbXSkge1xyXG4gICAgdGhpcy5mb3JtLnNldFZhbHVlKHZhbHVlKTtcclxuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcclxuICB9XHJcblxyXG4gIGdldCB2YWx1ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm0udmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgZW1wdHkoKSB7XHJcbiAgICByZXR1cm4gIXRoaXMuZm9ybS52YWx1ZTtcclxuICB9XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2ZpbGUnKSBmaWxlO1xyXG5cclxuICBwcml2YXRlIGRlc3Ryb3llZCQgPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgcHVibGljIG5nQ29udHJvbDogTmdDb250cm9sLFxyXG4gICAgZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgcHJpdmF0ZSBmbTogRm9jdXNNb25pdG9yLFxyXG4gICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD5cclxuICApIHtcclxuICAgIC8vIFJlcGxhY2UgdGhlIHByb3ZpZGVyIGZyb20gYWJvdmUgd2l0aCB0aGlzLlxyXG4gICAgaWYgKHRoaXMubmdDb250cm9sICE9IG51bGwpIHtcclxuICAgICAgLy8gU2V0dGluZyB0aGUgdmFsdWUgYWNjZXNzb3IgZGlyZWN0bHkgKGluc3RlYWQgb2YgdXNpbmdcclxuICAgICAgLy8gdGhlIHByb3ZpZGVycykgdG8gYXZvaWQgcnVubmluZyBpbnRvIGEgY2lyY3VsYXIgaW1wb3J0LlxyXG4gICAgICB0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yID0gKHRoaXMgYXMgYW55KTtcclxuICAgIH1cclxuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtQ29udHJvbChudWxsKTtcclxuICAgIHRoaXMuZm9ybS52YWx1ZUNoYW5nZXMucGlwZShcclxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJClcclxuICAgICkuc3Vic2NyaWJlKHZhbHVlID0+IHtcclxuICAgICAgaWYgKHRoaXMub25DaGFuZ2UpIHtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBmbS5tb25pdG9yKGVsUmVmLm5hdGl2ZUVsZW1lbnQsIHRydWUpLnN1YnNjcmliZShvcmlnaW4gPT4ge1xyXG4gICAgICB0aGlzLmZvY3VzZWQgPSAhIW9yaWdpbjtcclxuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLmZtLnN0b3BNb25pdG9yaW5nKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95ZWQkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBvbkNvbnRhaW5lckNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBpZiAoKGV2ZW50LnRhcmdldCBhcyBFbGVtZW50KS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdpbnB1dCcpIHtcclxuICAgICAgdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldERlc2NyaWJlZEJ5SWRzKGlkczogc3RyaW5nW10pIHtcclxuICAgIHRoaXMuZGVzY3JpYmVkQnkgPSBpZHMuam9pbignICcpO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRmlsZVtdKSB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoKSB7IH1cclxuXHJcbiAgb3BlbkNob29zZUZpbGUoKSB7XHJcbiAgICBpZiAodGhpcy52YWx1ZSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gbnVsbDtcclxuICAgICAgdGhpcy5maWxlLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcclxuICAgIH1cclxuICAgIHRoaXMuZmlsZS5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XHJcbiAgfVxyXG5cclxuICBvbkZpbGVzQWRkZWQoKSB7XHJcbiAgICBjb25zdCBmaWxlcyA9IE9iamVjdC52YWx1ZXModGhpcy5maWxlLm5hdGl2ZUVsZW1lbnQuZmlsZXMpIGFzIEZpbGVbXTtcclxuICAgIHRoaXMudmFsdWUgPSBmaWxlcztcclxuICB9XHJcblxyXG4gIGdldE5hbWUoKSB7XHJcbiAgICBpZiAoIXRoaXMudmFsdWUpIHtcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLm11bHRpcGxlID8gdGhpcy52YWx1ZS5tYXAoZmlsZSA9PiBmaWxlPy5uYW1lKS5qb2luKCcsICcpIDogdGhpcy52YWx1ZVswXT8ubmFtZTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIm1hdC1tYXRlcmlhbC1maWxlLWlucHV0LWNvbnRhaW5lclwiXHJcbiAgICAgKGNsaWNrKT1cIm9wZW5DaG9vc2VGaWxlKClcIj5cclxuICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJ7e3BsYWNlaG9sZGVyfX1cIlxyXG4gICAgICAgICBjbGFzcz1cIm5hbWVcIlxyXG4gICAgICAgICBbdmFsdWVdPVwiZ2V0TmFtZSgpXCJcclxuICAgICAgICAgcmVhZG9ubHk9XCJyZWFkb25seVwiIC8+XHJcbiAgPGlucHV0ICpuZ0lmPVwibXVsdGlwbGVcIlxyXG4gICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICNmaWxlXHJcbiAgICAgICAgIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiXHJcbiAgICAgICAgIChjaGFuZ2UpPVwib25GaWxlc0FkZGVkKClcIlxyXG4gICAgICAgICBtdWx0aXBsZSAvPlxyXG5cclxuICA8aW5wdXQgKm5nSWY9XCIhbXVsdGlwbGVcIlxyXG4gICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICNmaWxlXHJcbiAgICAgICAgIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiXHJcbiAgICAgICAgIChjaGFuZ2UpPVwib25GaWxlc0FkZGVkKClcIiAvPlxyXG4gIDxidXR0b24gbWF0LXN0cm9rZWQtYnV0dG9uPnt7YnV0dG9uVGV4dH19PC9idXR0b24+XHJcbjwvZGl2PlxyXG4iXX0=