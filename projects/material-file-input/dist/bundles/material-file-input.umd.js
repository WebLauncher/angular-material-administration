(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/form-field'), require('rxjs'), require('@angular/forms'), require('@angular/cdk/coercion'), require('rxjs/operators'), require('@angular/cdk/a11y'), require('@angular/common'), require('@angular/material/button'), require('@angular/material/input')) :
    typeof define === 'function' && define.amd ? define('material-file-input', ['exports', '@angular/core', '@angular/material/form-field', 'rxjs', '@angular/forms', '@angular/cdk/coercion', 'rxjs/operators', '@angular/cdk/a11y', '@angular/common', '@angular/material/button', '@angular/material/input'], factory) :
    (global = global || self, factory(global['material-file-input'] = {}, global.ng.core, global.ng.material.formField, global.rxjs, global.ng.forms, global.ng.cdk.coercion, global.rxjs.operators, global.ng.cdk.a11y, global.ng.common, global.ng.material.button, global.ng.material.input));
}(this, (function (exports, core, formField, rxjs, forms, coercion, operators, a11y, common, button, input) { 'use strict';

    var _c0 = ["file"];
    function MatFileInputComponent_input_2_Template(rf, ctx) { if (rf & 1) {
        var _r4 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "input", 5, 6);
        core.ɵɵlistener("change", function MatFileInputComponent_input_2_Template_input_change_0_listener() { core.ɵɵrestoreView(_r4); var ctx_r3 = core.ɵɵnextContext(); return ctx_r3.onFilesAdded(); });
        core.ɵɵelementEnd();
    } }
    function MatFileInputComponent_input_3_Template(rf, ctx) { if (rf & 1) {
        var _r7 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "input", 7, 6);
        core.ɵɵlistener("change", function MatFileInputComponent_input_3_Template_input_change_0_listener() { core.ɵɵrestoreView(_r7); var ctx_r6 = core.ɵɵnextContext(); return ctx_r6.onFilesAdded(); });
        core.ɵɵelementEnd();
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
            this.stateChanges = new rxjs.Subject();
            this.focused = false;
            this.destroyed$ = new rxjs.Subject();
            // Replace the provider from above with this.
            if (this.ngControl != null) {
                // Setting the value accessor directly (instead of using
                // the providers) to avoid running into a circular import.
                this.ngControl.valueAccessor = this;
            }
            this.form = new forms.FormControl(null);
            this.form.valueChanges.pipe(operators.takeUntil(this.destroyed$)).subscribe(function (value) {
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
                this.requiredValue = coercion.coerceBooleanProperty(req);
                this.stateChanges.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatFileInputComponent.prototype, "disabled", {
            get: function () { return this.disabledValue; },
            set: function (value) {
                this.disabledValue = coercion.coerceBooleanProperty(value);
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
        MatFileInputComponent.ɵfac = function MatFileInputComponent_Factory(t) { return new (t || MatFileInputComponent)(core.ɵɵdirectiveInject(forms.NgControl, 10), core.ɵɵdirectiveInject(forms.FormBuilder), core.ɵɵdirectiveInject(a11y.FocusMonitor), core.ɵɵdirectiveInject(core.ElementRef)); };
        MatFileInputComponent.ɵcmp = core.ɵɵdefineComponent({ type: MatFileInputComponent, selectors: [["mat-file-input"]], viewQuery: function MatFileInputComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(_c0, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.file = _t.first);
            } }, hostVars: 4, hostBindings: function MatFileInputComponent_HostBindings(rf, ctx) { if (rf & 2) {
                core.ɵɵhostProperty("id", ctx.id);
                core.ɵɵattribute("aria-describedby", ctx.describedBy);
                core.ɵɵclassProp("floating", ctx.shouldLabelFloat);
            } }, inputs: { placeholder: "placeholder", required: "required", disabled: "disabled", buttonText: "buttonText", multiple: "multiple" }, features: [core.ɵɵProvidersFeature([{ provide: formField.MatFormFieldControl, useExisting: MatFileInputComponent }])], decls: 6, vars: 5, consts: [[1, "mat-material-file-input-container", 3, "click"], ["readonly", "readonly", 1, "name", 3, "placeholder", "value"], ["type", "file", "style", "display: none", "multiple", "", 3, "change", 4, "ngIf"], ["type", "file", "style", "display: none", 3, "change", 4, "ngIf"], ["mat-stroked-button", ""], ["type", "file", "multiple", "", 2, "display", "none", 3, "change"], ["file", ""], ["type", "file", 2, "display", "none", 3, "change"]], template: function MatFileInputComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵlistener("click", function MatFileInputComponent_Template_div_click_0_listener() { return ctx.openChooseFile(); });
                core.ɵɵelement(1, "input", 1);
                core.ɵɵtemplate(2, MatFileInputComponent_input_2_Template, 2, 0, "input", 2);
                core.ɵɵtemplate(3, MatFileInputComponent_input_3_Template, 2, 0, "input", 3);
                core.ɵɵelementStart(4, "button", 4);
                core.ɵɵtext(5);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(1);
                core.ɵɵpropertyInterpolate("placeholder", ctx.placeholder);
                core.ɵɵproperty("value", ctx.getName());
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.multiple);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", !ctx.multiple);
                core.ɵɵadvance(2);
                core.ɵɵtextInterpolate(ctx.buttonText);
            } }, directives: [common.NgIf, button.MatButton], styles: [".mat-material-file-input-container[_ngcontent-%COMP%]{display:flex}span[_ngcontent-%COMP%]{opacity:0;transition:opacity .2s}.floating[_nghost-%COMP%]   span[_ngcontent-%COMP%]{opacity:1}input[_ngcontent-%COMP%]{border:none;background:0 0;padding:0;outline:0;font:inherit;flex-grow:1;text-align:left}button[_ngcontent-%COMP%]{line-height:normal}"], changeDetection: 0 });
        return MatFileInputComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(MatFileInputComponent, [{
            type: core.Component,
            args: [{
                    selector: 'mat-file-input',
                    templateUrl: './material-file-input.component.html',
                    styleUrls: ['./material-file-input.component.scss'],
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: formField.MatFormFieldControl, useExisting: MatFileInputComponent }],
                }]
        }], function () { return [{ type: forms.NgControl, decorators: [{
                    type: core.Optional
                }, {
                    type: core.Self
                }] }, { type: forms.FormBuilder }, { type: a11y.FocusMonitor }, { type: core.ElementRef }]; }, { id: [{
                type: core.HostBinding
            }], shouldLabelFloat: [{
                type: core.HostBinding,
                args: ['class.floating']
            }], placeholder: [{
                type: core.Input
            }], required: [{
                type: core.Input
            }], disabled: [{
                type: core.Input
            }], buttonText: [{
                type: core.Input
            }], describedBy: [{
                type: core.HostBinding,
                args: ['attr.aria-describedby']
            }], multiple: [{
                type: core.Input
            }], file: [{
                type: core.ViewChild,
                args: ['file']
            }] }); })();

    var MatFileInputModule = /** @class */ (function () {
        function MatFileInputModule() {
        }
        MatFileInputModule.ɵmod = core.ɵɵdefineNgModule({ type: MatFileInputModule });
        MatFileInputModule.ɵinj = core.ɵɵdefineInjector({ factory: function MatFileInputModule_Factory(t) { return new (t || MatFileInputModule)(); }, imports: [[
                    common.CommonModule,
                    input.MatInputModule,
                    button.MatButtonModule,
                    forms.ReactiveFormsModule,
                    forms.FormsModule
                ]] });
        return MatFileInputModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(MatFileInputModule, { declarations: [MatFileInputComponent], imports: [common.CommonModule,
            input.MatInputModule,
            button.MatButtonModule,
            forms.ReactiveFormsModule,
            forms.FormsModule], exports: [MatFileInputComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(MatFileInputModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [MatFileInputComponent],
                    imports: [
                        common.CommonModule,
                        input.MatInputModule,
                        button.MatButtonModule,
                        forms.ReactiveFormsModule,
                        forms.FormsModule
                    ],
                    exports: [MatFileInputComponent]
                }]
        }], null, null); })();

    exports.MatFileInputComponent = MatFileInputComponent;
    exports.MatFileInputModule = MatFileInputModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=material-file-input.umd.js.map
