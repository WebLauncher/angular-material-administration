import { ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵelementEnd, ɵɵdirectiveInject, ElementRef, ɵɵdefineComponent, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵhostProperty, ɵɵattribute, ɵɵclassProp, ɵɵProvidersFeature, ɵɵelement, ɵɵtemplate, ɵɵtext, ɵɵadvance, ɵɵpropertyInterpolate, ɵɵproperty, ɵɵtextInterpolate, ɵsetClassMetadata, Component, ChangeDetectionStrategy, Optional, Self, HostBinding, Input, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { FormControl, NgControl, FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { takeUntil } from 'rxjs/operators';
import { FocusMonitor } from '@angular/cdk/a11y';
import { NgIf, CommonModule } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

var _c0 = ["file"];
function MatFileInputComponent_input_2_Template(rf, ctx) { if (rf & 1) {
    var _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 5, 6);
    ɵɵlistener("change", function MatFileInputComponent_input_2_Template_input_change_0_listener() { ɵɵrestoreView(_r4); var ctx_r3 = ɵɵnextContext(); return ctx_r3.onFilesAdded(); });
    ɵɵelementEnd();
} }
function MatFileInputComponent_input_3_Template(rf, ctx) { if (rf & 1) {
    var _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 7, 6);
    ɵɵlistener("change", function MatFileInputComponent_input_3_Template_input_change_0_listener() { ɵɵrestoreView(_r7); var ctx_r6 = ɵɵnextContext(); return ctx_r6.onFilesAdded(); });
    ɵɵelementEnd();
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
    MatFileInputComponent.ɵfac = function MatFileInputComponent_Factory(t) { return new (t || MatFileInputComponent)(ɵɵdirectiveInject(NgControl, 10), ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(FocusMonitor), ɵɵdirectiveInject(ElementRef)); };
    MatFileInputComponent.ɵcmp = ɵɵdefineComponent({ type: MatFileInputComponent, selectors: [["mat-file-input"]], viewQuery: function MatFileInputComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.file = _t.first);
        } }, hostVars: 4, hostBindings: function MatFileInputComponent_HostBindings(rf, ctx) { if (rf & 2) {
            ɵɵhostProperty("id", ctx.id);
            ɵɵattribute("aria-describedby", ctx.describedBy);
            ɵɵclassProp("floating", ctx.shouldLabelFloat);
        } }, inputs: { placeholder: "placeholder", required: "required", disabled: "disabled", buttonText: "buttonText", multiple: "multiple" }, features: [ɵɵProvidersFeature([{ provide: MatFormFieldControl, useExisting: MatFileInputComponent }])], decls: 6, vars: 5, consts: [[1, "mat-material-file-input-container", 3, "click"], ["readonly", "readonly", 1, "name", 3, "placeholder", "value"], ["type", "file", "style", "display: none", "multiple", "", 3, "change", 4, "ngIf"], ["type", "file", "style", "display: none", 3, "change", 4, "ngIf"], ["mat-stroked-button", ""], ["type", "file", "multiple", "", 2, "display", "none", 3, "change"], ["file", ""], ["type", "file", 2, "display", "none", 3, "change"]], template: function MatFileInputComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵlistener("click", function MatFileInputComponent_Template_div_click_0_listener() { return ctx.openChooseFile(); });
            ɵɵelement(1, "input", 1);
            ɵɵtemplate(2, MatFileInputComponent_input_2_Template, 2, 0, "input", 2);
            ɵɵtemplate(3, MatFileInputComponent_input_3_Template, 2, 0, "input", 3);
            ɵɵelementStart(4, "button", 4);
            ɵɵtext(5);
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵpropertyInterpolate("placeholder", ctx.placeholder);
            ɵɵproperty("value", ctx.getName());
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.multiple);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.multiple);
            ɵɵadvance(2);
            ɵɵtextInterpolate(ctx.buttonText);
        } }, directives: [NgIf, MatButton], styles: [".mat-material-file-input-container[_ngcontent-%COMP%]{display:flex}span[_ngcontent-%COMP%]{opacity:0;transition:opacity .2s}.floating[_nghost-%COMP%]   span[_ngcontent-%COMP%]{opacity:1}input[_ngcontent-%COMP%]{border:none;background:0 0;padding:0;outline:0;font:inherit;flex-grow:1;text-align:left}button[_ngcontent-%COMP%]{line-height:normal}"], changeDetection: 0 });
    return MatFileInputComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(MatFileInputComponent, [{
        type: Component,
        args: [{
                selector: 'mat-file-input',
                templateUrl: './material-file-input.component.html',
                styleUrls: ['./material-file-input.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{ provide: MatFormFieldControl, useExisting: MatFileInputComponent }],
            }]
    }], function () { return [{ type: NgControl, decorators: [{
                type: Optional
            }, {
                type: Self
            }] }, { type: FormBuilder }, { type: FocusMonitor }, { type: ElementRef }]; }, { id: [{
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

var MatFileInputModule = /** @class */ (function () {
    function MatFileInputModule() {
    }
    MatFileInputModule.ɵmod = ɵɵdefineNgModule({ type: MatFileInputModule });
    MatFileInputModule.ɵinj = ɵɵdefineInjector({ factory: function MatFileInputModule_Factory(t) { return new (t || MatFileInputModule)(); }, imports: [[
                CommonModule,
                MatInputModule,
                MatButtonModule,
                ReactiveFormsModule,
                FormsModule
            ]] });
    return MatFileInputModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(MatFileInputModule, { declarations: [MatFileInputComponent], imports: [CommonModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        FormsModule], exports: [MatFileInputComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(MatFileInputModule, [{
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

/*
 * Public API Surface of material-file-input
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MatFileInputComponent, MatFileInputModule };
//# sourceMappingURL=material-file-input.js.map
