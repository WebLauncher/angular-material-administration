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

const _c0 = ["file"];
function MatFileInputComponent_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 5, 6);
    ɵɵlistener("change", function MatFileInputComponent_input_2_Template_input_change_0_listener() { ɵɵrestoreView(_r4); const ctx_r3 = ɵɵnextContext(); return ctx_r3.onFilesAdded(); });
    ɵɵelementEnd();
} }
function MatFileInputComponent_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 7, 6);
    ɵɵlistener("change", function MatFileInputComponent_input_3_Template_input_change_0_listener() { ɵɵrestoreView(_r7); const ctx_r6 = ɵɵnextContext(); return ctx_r6.onFilesAdded(); });
    ɵɵelementEnd();
} }
class MatFileInputComponent {
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

class MatFileInputModule {
}
MatFileInputModule.ɵmod = ɵɵdefineNgModule({ type: MatFileInputModule });
MatFileInputModule.ɵinj = ɵɵdefineInjector({ factory: function MatFileInputModule_Factory(t) { return new (t || MatFileInputModule)(); }, imports: [[
            CommonModule,
            MatInputModule,
            MatButtonModule,
            ReactiveFormsModule,
            FormsModule
        ]] });
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
