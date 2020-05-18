import { __assign } from "tslib";
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/flex-layout/extended";
import * as i5 from "@ckeditor/ckeditor5-angular";
import * as i6 from "@angular/material/form-field";
import * as i7 from "@angular/material/input";
import * as i8 from "@angular/material/select";
import * as i9 from "@angular/material/core";
import * as i10 from "@angular/material/radio";
import * as i11 from "@angular/material/datepicker";
import * as i12 from "@angular/material/checkbox";
import * as i13 from "@angular/material/slide-toggle";
import * as i14 from "@weblauncher/material-file-input";
import * as i15 from "@angular/flex-layout/flex";
function FormComponent_ng_container_1_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
var _c0 = function (a0) { return { field: a0 }; };
function FormComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, FormComponent_ng_container_1_div_1_ng_container_1_Template, 1, 0, "ng-container", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var field_r4 = ctx.$implicit;
    i0.ɵɵnextContext(2);
    var _r1 = i0.ɵɵreference(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, field_r4));
} }
function FormComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, FormComponent_ng_container_1_div_1_Template, 2, 4, "div", 3);
    i0.ɵɵelementStart(2, "div", 4);
    i0.ɵɵelementStart(3, "button", 5);
    i0.ɵɵtext(4, "Save ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.fields);
} }
function FormComponent_ng_template_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵelementStart(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "ckeditor", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var field_r6 = i0.ɵɵnextContext().field;
    var ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(field_r6 == null ? null : field_r6.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formControlName", field_r6 == null ? null : field_r6.name)("editor", ctx_r7.Editor);
} }
function FormComponent_ng_template_2_mat_form_field_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-form-field");
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "textarea", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var field_r6 = i0.ɵɵnextContext().field;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(field_r6 == null ? null : field_r6.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formControlName", field_r6 == null ? null : field_r6.name);
} }
function FormComponent_ng_template_2_mat_form_field_4_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r20 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r20 == null ? null : option_r20.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r20 == null ? null : option_r20.label, " ");
} }
function FormComponent_ng_template_2_mat_form_field_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-form-field");
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-select", 17);
    i0.ɵɵtemplate(4, FormComponent_ng_template_2_mat_form_field_4_mat_option_4_Template, 2, 2, "mat-option", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var field_r6 = i0.ɵɵnextContext().field;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(field_r6 == null ? null : field_r6.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formControlName", field_r6 == null ? null : field_r6.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", field_r6 == null ? null : field_r6.options);
} }
function FormComponent_ng_template_2_div_5_mat_radio_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-radio-button", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r23 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r23 == null ? null : option_r23.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r23 == null ? null : option_r23.label);
} }
function FormComponent_ng_template_2_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-radio-group", 21);
    i0.ɵɵtemplate(4, FormComponent_ng_template_2_div_5_mat_radio_button_4_Template, 2, 2, "mat-radio-button", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var field_r6 = i0.ɵɵnextContext().field;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", field_r6 == null ? null : field_r6.label, ":");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formControlName", field_r6 == null ? null : field_r6.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", field_r6 == null ? null : field_r6.options);
} }
function FormComponent_ng_template_2_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-form-field");
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "input", 22);
    i0.ɵɵelement(4, "mat-datepicker-toggle", 23);
    i0.ɵɵelement(5, "mat-datepicker", 24, 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var _r25 = i0.ɵɵreference(6);
    var field_r6 = i0.ɵɵnextContext().field;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(field_r6 == null ? null : field_r6.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formControlName", field_r6 == null ? null : field_r6.name)("matDatepicker", _r25);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("for", _r25);
} }
function FormComponent_ng_template_2_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵelementStart(1, "mat-checkbox", 27);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var field_r6 = i0.ɵɵnextContext().field;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formControlName", field_r6 == null ? null : field_r6.name)("value", true);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(field_r6 == null ? null : field_r6.label);
} }
function FormComponent_ng_template_2_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵelementStart(1, "mat-slide-toggle", 21);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var field_r6 = i0.ɵɵnextContext().field;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formControlName", field_r6 == null ? null : field_r6.name);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", field_r6 == null ? null : field_r6.label, " ");
} }
function FormComponent_ng_template_2_mat_form_field_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-form-field");
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "mat-file-input", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var field_r6 = i0.ɵɵnextContext().field;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(field_r6 == null ? null : field_r6.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formControlName", field_r6 == null ? null : field_r6.name)("placeholder", field_r6 == null ? null : field_r6.placeholder);
} }
function FormComponent_ng_template_2_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 29);
    i0.ɵɵelement(4, "img", 30);
    i0.ɵɵelementStart(5, "button", 31);
    i0.ɵɵlistener("click", function FormComponent_ng_template_2_div_10_div_1_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r34); var field_r6 = i0.ɵɵnextContext(2).field; var ctx_r32 = i0.ɵɵnextContext(); return ctx_r32.removeImage(field_r6); });
    i0.ɵɵtext(6, "Remove");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var field_r6 = i0.ɵɵnextContext(2).field;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(field_r6 == null ? null : field_r6.label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", field_r6 == null ? null : field_r6.value, i0.ɵɵsanitizeUrl);
} }
function FormComponent_ng_template_2_div_10_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-form-field");
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "mat-file-input", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var field_r6 = i0.ɵɵnextContext(2).field;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(field_r6 == null ? null : field_r6.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formControlName", field_r6 == null ? null : field_r6.name)("placeholder", field_r6 == null ? null : field_r6.placeholder);
} }
function FormComponent_ng_template_2_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, FormComponent_ng_template_2_div_10_div_1_Template, 7, 2, "div", 1);
    i0.ɵɵtemplate(2, FormComponent_ng_template_2_div_10_mat_form_field_2_Template, 4, 3, "mat-form-field", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var field_r6 = i0.ɵɵnextContext().field;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r6 == null ? null : field_r6.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(field_r6 == null ? null : field_r6.value));
} }
function FormComponent_ng_template_2_mat_form_field_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-form-field");
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "input", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var field_r6 = i0.ɵɵnextContext().field;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(field_r6 == null ? null : field_r6.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formControlName", field_r6 == null ? null : field_r6.name)("placeholder", field_r6 == null ? null : field_r6.placeholder);
} }
function FormComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelementContainerStart(1, 8);
    i0.ɵɵtemplate(2, FormComponent_ng_template_2_div_2_Template, 4, 3, "div", 9);
    i0.ɵɵtemplate(3, FormComponent_ng_template_2_mat_form_field_3_Template, 4, 2, "mat-form-field", 10);
    i0.ɵɵtemplate(4, FormComponent_ng_template_2_mat_form_field_4_Template, 5, 3, "mat-form-field", 10);
    i0.ɵɵtemplate(5, FormComponent_ng_template_2_div_5_Template, 5, 3, "div", 11);
    i0.ɵɵtemplate(6, FormComponent_ng_template_2_mat_form_field_6_Template, 7, 4, "mat-form-field", 10);
    i0.ɵɵtemplate(7, FormComponent_ng_template_2_div_7_Template, 3, 3, "div", 12);
    i0.ɵɵtemplate(8, FormComponent_ng_template_2_div_8_Template, 3, 2, "div", 12);
    i0.ɵɵtemplate(9, FormComponent_ng_template_2_mat_form_field_9_Template, 4, 3, "mat-form-field", 10);
    i0.ɵɵtemplate(10, FormComponent_ng_template_2_div_10_Template, 3, 2, "div", 10);
    i0.ɵɵtemplate(11, FormComponent_ng_template_2_mat_form_field_11_Template, 4, 3, "mat-form-field", 13);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var field_r6 = ctx.field;
    i0.ɵɵproperty("ngStyle", field_r6 == null ? null : field_r6.style == null ? null : field_r6.style.form);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", field_r6 == null ? null : field_r6.inputType);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "ckeditor");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "textarea");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "select");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "radio");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "datepicker");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "checkbox");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "toggle");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "file");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "image");
} }
var FormComponent = /** @class */ (function () {
    function FormComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.save = new EventEmitter();
        this.valueChanges = new EventEmitter();
        this.Editor = ClassicEditor;
        this.destroyed$ = new Subject();
    }
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _a;
        if (this.fields) {
            this.form = this.formBuilder.group((_a = this.fields) === null || _a === void 0 ? void 0 : _a.reduce(function (prev, cur) {
                var _a;
                return __assign(__assign({}, prev), (_a = {}, _a[cur === null || cur === void 0 ? void 0 : cur.name] = [_this.getFieldValue(cur), _this.getFieldValidators(cur)], _a));
            }, {}));
            this.form.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe(this.valueChanges);
        }
    };
    FormComponent.prototype.ngOnDestroy = function () {
        this.destroyed$.next();
        this.destroyed$.complete();
    };
    FormComponent.prototype.submit = function () {
        if (this.form.valid) {
            this.save.emit(this.form.value);
        }
    };
    FormComponent.prototype.removeImage = function (field) {
        field.value = null;
        this.form.get(field.name).setValue(null);
    };
    FormComponent.prototype.getFieldValue = function (field) {
        return field === null || field === void 0 ? void 0 : field.value;
    };
    FormComponent.prototype.getFieldValidators = function (field) {
        return [Validators.required];
    };
    FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
    FormComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormComponent, selectors: [["mat-administration-form"]], inputs: { fields: "fields" }, outputs: { save: "save", valueChanges: "valueChanges" }, decls: 4, vars: 2, consts: [[3, "formGroup", "ngSubmit"], [4, "ngIf"], ["formField", ""], [4, "ngFor", "ngForOf"], [1, "flex", "justify-end"], ["mat-raised-button", "", "color", "primary", "type", "submit"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "form-field-container", 3, "ngStyle"], [3, "ngSwitch"], ["class", "ckeditor", 4, "ngSwitchCase"], [4, "ngSwitchCase"], ["class", "radio", 4, "ngSwitchCase"], ["class", "checkbox", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "ckeditor"], [3, "formControlName", "editor"], ["matInput", "", 3, "formControlName"], [3, "formControlName"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "radio"], ["color", "primary", 3, "formControlName"], ["matInput", "", 3, "formControlName", "matDatepicker"], ["matSuffix", "", 3, "for"], ["touchUi", ""], ["picker", ""], [1, "checkbox"], ["color", "primary", 3, "formControlName", "value"], [3, "formControlName", "placeholder"], ["fxLayout", "row", "fxLayoutAlign", "start"], ["alt", "field?.label", 1, "file-input-image", 3, "src"], ["type", "button", "mat-raised-button", "", 3, "click"], ["matInput", "", 3, "formControlName", "placeholder"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0);
            i0.ɵɵlistener("ngSubmit", function FormComponent_Template_form_ngSubmit_0_listener() { return ctx.submit(); });
            i0.ɵɵtemplate(1, FormComponent_ng_container_1_Template, 5, 1, "ng-container", 1);
            i0.ɵɵtemplate(2, FormComponent_ng_template_2_Template, 12, 11, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.fields);
        } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NgIf, i2.NgForOf, i3.MatButton, i2.NgTemplateOutlet, i2.NgStyle, i4.DefaultStyleDirective, i2.NgSwitch, i2.NgSwitchCase, i2.NgSwitchDefault, i5.CKEditorComponent, i1.NgControlStatus, i1.FormControlName, i6.MatFormField, i6.MatLabel, i7.MatInput, i1.DefaultValueAccessor, i8.MatSelect, i9.MatOption, i10.MatRadioGroup, i10.MatRadioButton, i11.MatDatepickerInput, i11.MatDatepickerToggle, i6.MatSuffix, i11.MatDatepicker, i12.MatCheckbox, i13.MatSlideToggle, i14.MatFileInputComponent, i15.DefaultLayoutDirective, i15.DefaultLayoutAlignDirective], styles: ["[_nghost-%COMP%]{display:block}mat-form-field[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]     .ck-editor__editable_inline{min-height:200px}.ckeditor[_ngcontent-%COMP%]{margin-bottom:1rem}.ckeditor[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{opacity:.54;transform:scale(.75)}.radio[_ngcontent-%COMP%]{margin-bottom:1rem}.radio[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%]{margin-right:1rem}.radio[_ngcontent-%COMP%]   mat-radio-button[_ngcontent-%COMP%]{margin-right:.5rem}.file-input-image[_ngcontent-%COMP%]{max-height:3rem;margin-right:1rem}"], changeDetection: 0 });
    return FormComponent;
}());
export { FormComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormComponent, [{
        type: Component,
        args: [{
                selector: 'mat-administration-form',
                templateUrl: './form.component.html',
                styleUrls: ['./form.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, { fields: [{
            type: Input
        }], save: [{
            type: Output
        }], valueChanges: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXRlcmlhbC1hZG1pbmlzdHJhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Zvcm0vZm9ybS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9mb3JtL2Zvcm0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDbkgsT0FBTyxFQUEwQixVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsU0FBUyxFQUFPLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEtBQUssYUFBYSxNQUFNLG1DQUFtQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNDN0Qsd0JBQW9GOzs7O0lBRHRGLDJCQUNFO0lBQUEscUdBQXFFO0lBQ3ZFLGlCQUFNOzs7OztJQURVLGVBQXNEO0lBQXRELHNDQUFzRCxpRUFBQTs7O0lBSHhFLDZCQUVFO0lBQUEsNkVBQ0U7SUFFRiw4QkFDRTtJQUFBLGlDQUVzQjtJQUFBLHFCQUN0QjtJQUFBLGlCQUFTO0lBQ1gsaUJBQU07SUFDUiwwQkFBZTs7O0lBVFIsZUFBNEI7SUFBNUIsdUNBQTRCOzs7SUFnQjdCLCtCQUVFO0lBQUEsNkJBQU87SUFBQSxZQUFnQjtJQUFBLGlCQUFRO0lBQy9CLCtCQUN1QztJQUN6QyxpQkFBTTs7OztJQUhHLGVBQWdCO0lBQWhCLDhEQUFnQjtJQUNiLGVBQStCO0lBQS9CLHlFQUErQix5QkFBQTs7O0lBSTNDLHNDQUNFO0lBQUEsaUNBQVc7SUFBQSxZQUFnQjtJQUFBLGlCQUFZO0lBQ3ZDLCtCQUNxRDtJQUN2RCxpQkFBaUI7OztJQUhKLGVBQWdCO0lBQWhCLDhEQUFnQjtJQUVqQixlQUErQjtJQUEvQix5RUFBK0I7OztJQU12QyxzQ0FFRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBYTs7O0lBRkQsb0VBQXVCO0lBQ2pDLGVBQ0Y7SUFERSw2RUFDRjs7O0lBTkosc0NBQ0U7SUFBQSxpQ0FBVztJQUFBLFlBQWdCO0lBQUEsaUJBQVk7SUFDdkMsc0NBQ0U7SUFBQSw0R0FFRTtJQUVKLGlCQUFhO0lBQ2YsaUJBQWlCOzs7SUFQSixlQUFnQjtJQUFoQiw4REFBZ0I7SUFDZixlQUErQjtJQUEvQix5RUFBK0I7SUFDN0IsZUFBcUM7SUFBckMsb0VBQXFDOzs7SUFZakQsNENBQzBDO0lBQUEsWUFBaUI7SUFBQSxpQkFBbUI7OztJQUE1RCxvRUFBdUI7SUFBQyxlQUFpQjtJQUFqQixrRUFBaUI7OztJQU4vRCwrQkFFRTtJQUFBLGlDQUFXO0lBQUEsWUFBaUI7SUFBQSxpQkFBWTtJQUN4QywyQ0FFRTtJQUFBLDZHQUMwQztJQUM1QyxpQkFBa0I7SUFDcEIsaUJBQU07OztJQU5PLGVBQWlCO0lBQWpCLHdFQUFpQjtJQUNYLGVBQStCO0lBQS9CLHlFQUErQjtJQUU1QixlQUFxQztJQUFyQyxvRUFBcUM7OztJQUszRCxzQ0FDRTtJQUFBLGlDQUFXO0lBQUEsWUFBZ0I7SUFBQSxpQkFBWTtJQUN2Qyw0QkFHQTtJQUFBLDRDQUM4RDtJQUM5RCx5Q0FDeUM7SUFDM0MsaUJBQWlCOzs7O0lBUkosZUFBZ0I7SUFBaEIsOERBQWdCO0lBRXBCLGVBQStCO0lBQS9CLHlFQUErQix1QkFBQTtJQUdmLGVBQWM7SUFBZCwwQkFBYzs7O0lBS3ZDLCtCQUVFO0lBQUEsd0NBRTZCO0lBQUEsWUFBZ0I7SUFBQSxpQkFBZTtJQUM5RCxpQkFBTTs7O0lBSFUsZUFBK0I7SUFBL0IseUVBQStCLGVBQUE7SUFFaEIsZUFBZ0I7SUFBaEIsOERBQWdCOzs7SUFHL0MsK0JBRUU7SUFBQSw0Q0FFRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBbUI7SUFDckIsaUJBQU07OztJQUhjLGVBQStCO0lBQS9CLHlFQUErQjtJQUMvQyxlQUNGO0lBREUseUVBQ0Y7OztJQUdGLHNDQUNFO0lBQUEsaUNBQVc7SUFBQSxZQUFnQjtJQUFBLGlCQUFZO0lBQ3ZDLHFDQUNvRTtJQUN0RSxpQkFBaUI7OztJQUhKLGVBQWdCO0lBQWhCLDhEQUFnQjtJQUNYLGVBQStCO0lBQS9CLHlFQUErQiwrREFBQTs7OztJQUsvQywyQkFDRTtJQUFBLGlDQUFXO0lBQUEsWUFBZ0I7SUFBQSxpQkFBWTtJQUN2QywrQkFFRTtJQUFBLDBCQUdBO0lBQUEsa0NBRXFDO0lBQTdCLDBQQUE0QjtJQUFDLHNCQUFNO0lBQUEsaUJBQVM7SUFDdEQsaUJBQU07SUFDUixpQkFBTTs7O0lBVk8sZUFBZ0I7SUFBaEIsOERBQWdCO0lBSXBCLGVBQW9CO0lBQXBCLGdGQUFvQjs7O0lBUTdCLHNDQUNFO0lBQUEsaUNBQVc7SUFBQSxZQUFnQjtJQUFBLGlCQUFZO0lBQ3ZDLHFDQUNvRTtJQUV0RSxpQkFBaUI7OztJQUpKLGVBQWdCO0lBQWhCLDhEQUFnQjtJQUNYLGVBQStCO0lBQS9CLHlFQUErQiwrREFBQTs7O0lBaEJuRCwyQkFDRTtJQUFBLG1GQUNFO0lBWUYseUdBQ0U7SUFLSixpQkFBTTs7O0lBbkJDLGVBQW9CO0lBQXBCLCtEQUFvQjtJQWFULGVBQXFCO0lBQXJCLGtFQUFxQjs7O0lBUXZDLHNDQUNFO0lBQUEsaUNBQVc7SUFBQSxZQUFnQjtJQUFBLGlCQUFZO0lBQ3ZDLDRCQUdGO0lBQUEsaUJBQWlCOzs7SUFKSixlQUFnQjtJQUFoQiw4REFBZ0I7SUFFcEIsZUFBK0I7SUFBL0IseUVBQStCLCtEQUFBOzs7SUE3RjVDLDhCQUNFO0lBQUEsZ0NBQ0U7SUFDQSw0RUFFRTtJQUtGLG1HQUNFO0lBS0YsbUdBQ0U7SUFTRiw2RUFFRTtJQVFGLG1HQUNFO0lBVUYsNkVBRUU7SUFLRiw2RUFFRTtJQU1GLG1HQUNFO0lBS0YsK0VBQ0U7SUFxQkYscUdBQ0U7SUFLSiwwQkFBZTtJQUNqQixpQkFBTTs7O0lBakc0Qix1R0FBOEI7SUFDaEQsZUFBNkI7SUFBN0IsdUVBQTZCO0lBRXBDLGVBQTBCO0lBQTFCLHlDQUEwQjtJQU9mLGVBQTBCO0lBQTFCLHlDQUEwQjtJQU0xQixlQUF3QjtJQUF4Qix1Q0FBd0I7SUFVbkMsZUFBdUI7SUFBdkIsc0NBQXVCO0lBVVosZUFBNEI7SUFBNUIsMkNBQTRCO0lBV3ZDLGVBQTBCO0lBQTFCLHlDQUEwQjtJQU8xQixlQUF3QjtJQUF4Qix1Q0FBd0I7SUFRYixlQUFzQjtJQUF0QixxQ0FBc0I7SUFNakMsZUFBdUI7SUFBdkIsc0NBQXVCOztBRC9FcEM7SUFnQkUsdUJBQ1UsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFUeEIsU0FBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzdDLGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHL0QsV0FBTSxHQUFHLGFBQWEsQ0FBQztRQUVmLGVBQVUsR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUk5QyxDQUFDO0lBRUwsZ0NBQVEsR0FBUjtRQUFBLGlCQVlDOztRQVhDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLE9BQ2hDLElBQUksQ0FBQyxNQUFNLDBDQUFFLE1BQU0sQ0FBQyxVQUFDLElBQUksRUFBRSxHQUFHOztnQkFDNUIsNkJBQVksSUFBSSxnQkFBRyxHQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsSUFBSSxJQUFHLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBRztZQUMzRixDQUFDLEVBQUUsRUFBRSxFQUNOLENBQUM7WUFFRixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQ3pCLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQzNCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7SUFFRCxtQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCw4QkFBTSxHQUFOO1FBQ0UsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxLQUFLO1FBQ2YsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU8scUNBQWEsR0FBckIsVUFBc0IsS0FBSztRQUN6QixPQUFPLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVPLDBDQUFrQixHQUExQixVQUEyQixLQUFLO1FBQzlCLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs4RUFsRFUsYUFBYTtzREFBYixhQUFhO1lDWjFCLCtCQUVFO1lBREksOEZBQVksWUFBUSxJQUFDO1lBQ3pCLGdGQUVFO1lBV0YsaUhBRUU7WUFvR0osaUJBQU87O1lBckhELG9DQUFrQjtZQUVSLGVBQWM7WUFBZCxpQ0FBYzs7d0JERjlCO0NBK0RDLEFBekRELElBeURDO1NBbkRZLGFBQWE7a0RBQWIsYUFBYTtjQU56QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLHVCQUF1QjtnQkFDcEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7Z0JBQ3BDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOztrQkFFRSxLQUFLOztrQkFDTCxNQUFNOztrQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgKiBhcyBDbGFzc2ljRWRpdG9yIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtYnVpbGQtY2xhc3NpYyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21hdC1hZG1pbmlzdHJhdGlvbi1mb3JtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZm9ybS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZm9ybS5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIGZpZWxkczogYW55W107XHJcbiAgQE91dHB1dCgpIHNhdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBmb3JtOiBGb3JtR3JvdXA7XHJcbiAgRWRpdG9yID0gQ2xhc3NpY0VkaXRvcjtcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlclxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZmllbGRzKSB7XHJcbiAgICAgIHRoaXMuZm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoXHJcbiAgICAgICAgdGhpcy5maWVsZHM/LnJlZHVjZSgocHJldiwgY3VyKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4geyAuLi5wcmV2LCBbY3VyPy5uYW1lXTogW3RoaXMuZ2V0RmllbGRWYWx1ZShjdXIpLCB0aGlzLmdldEZpZWxkVmFsaWRhdG9ycyhjdXIpXSB9O1xyXG4gICAgICAgIH0sIHt9KVxyXG4gICAgICApO1xyXG5cclxuICAgICAgdGhpcy5mb3JtLnZhbHVlQ2hhbmdlcy5waXBlKFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpXHJcbiAgICAgICkuc3Vic2NyaWJlKHRoaXMudmFsdWVDaGFuZ2VzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveWVkJC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgc3VibWl0KCkge1xyXG4gICAgaWYgKHRoaXMuZm9ybS52YWxpZCkge1xyXG4gICAgICB0aGlzLnNhdmUuZW1pdCh0aGlzLmZvcm0udmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlSW1hZ2UoZmllbGQpIHtcclxuICAgIGZpZWxkLnZhbHVlID0gbnVsbDtcclxuICAgIHRoaXMuZm9ybS5nZXQoZmllbGQubmFtZSkuc2V0VmFsdWUobnVsbCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEZpZWxkVmFsdWUoZmllbGQpIHtcclxuICAgIHJldHVybiBmaWVsZD8udmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEZpZWxkVmFsaWRhdG9ycyhmaWVsZCkge1xyXG4gICAgcmV0dXJuIFtWYWxpZGF0b3JzLnJlcXVpcmVkXTtcclxuICB9XHJcbn1cclxuIiwiPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtXCJcclxuICAgICAgKG5nU3VibWl0KT1cInN1Ym1pdCgpXCI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZpZWxkc1wiPlxyXG5cclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGZpZWxkc1wiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZm9ybUZpZWxkOyBjb250ZXh0OiB7ZmllbGQ6IGZpZWxkfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWVuZFwiPlxyXG4gICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCI+U2F2ZVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG5cclxuICA8bmctdGVtcGxhdGUgI2Zvcm1GaWVsZFxyXG4gICAgICAgICAgICAgICBsZXQtZmllbGQ9XCJmaWVsZFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGQtY29udGFpbmVyXCIgW25nU3R5bGVdPVwiZmllbGQ/LnN0eWxlPy5mb3JtXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImZpZWxkPy5pbnB1dFR5cGVcIj5cclxuICAgICAgICA8IS0tIGNrZWRpdG9yIC0tPlxyXG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidja2VkaXRvcidcIlxyXG4gICAgICAgICAgICAgY2xhc3M9XCJja2VkaXRvclwiPlxyXG4gICAgICAgICAgPGxhYmVsPnt7ZmllbGQ/LmxhYmVsfX08L2xhYmVsPlxyXG4gICAgICAgICAgPGNrZWRpdG9yIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQ/Lm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtlZGl0b3JdPVwiRWRpdG9yXCI+PC9ja2VkaXRvcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8IS0tIHRleHRhcmVhIC0tPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdTd2l0Y2hDYXNlPVwiJ3RleHRhcmVhJ1wiPlxyXG4gICAgICAgICAgPG1hdC1sYWJlbD57e2ZpZWxkPy5sYWJlbH19PC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICA8dGV4dGFyZWEgbWF0SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkPy5uYW1lXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDwhLS0gc2VsZWN0IC0tPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdTd2l0Y2hDYXNlPVwiJ3NlbGVjdCdcIj5cclxuICAgICAgICAgIDxtYXQtbGFiZWw+e3tmaWVsZD8ubGFiZWx9fTwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgPG1hdC1zZWxlY3QgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZD8ubmFtZVwiPlxyXG4gICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGZpZWxkPy5vcHRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIm9wdGlvbj8udmFsdWVcIj5cclxuICAgICAgICAgICAgICB7e29wdGlvbj8ubGFiZWx9fVxyXG4gICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8IS0tIHJhZGlvIC0tPlxyXG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidyYWRpbydcIlxyXG4gICAgICAgICAgICAgY2xhc3M9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgPG1hdC1sYWJlbD57e2ZpZWxkPy5sYWJlbH19OjwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgPG1hdC1yYWRpby1ncm91cCBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkPy5uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgZmllbGQ/Lm9wdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwib3B0aW9uPy52YWx1ZVwiPnt7b3B0aW9uPy5sYWJlbH19PC9tYXQtcmFkaW8tYnV0dG9uPlxyXG4gICAgICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPCEtLSBkYXRlcGlja2VyIC0tPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdTd2l0Y2hDYXNlPVwiJ2RhdGVwaWNrZXInXCI+XHJcbiAgICAgICAgICA8bWF0LWxhYmVsPnt7ZmllbGQ/LmxhYmVsfX08L21hdC1sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dFxyXG4gICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQ/Lm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgIFttYXREYXRlcGlja2VyXT1cInBpY2tlclwiPlxyXG4gICAgICAgICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Zvcl09XCJwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cclxuICAgICAgICAgIDxtYXQtZGF0ZXBpY2tlciB0b3VjaFVpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgI3BpY2tlcj48L21hdC1kYXRlcGlja2VyPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPCEtLSBjaGVja2JveCAtLT5cclxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInY2hlY2tib3gnXCJcclxuICAgICAgICAgICAgIGNsYXNzPVwiY2hlY2tib3hcIj5cclxuICAgICAgICAgIDxtYXQtY2hlY2tib3ggW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZD8ubmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJ0cnVlXCI+e3tmaWVsZD8ubGFiZWx9fTwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS0gc2xpZGUgdG9nbGUgLS0+XHJcbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ3RvZ2dsZSdcIlxyXG4gICAgICAgICAgICAgY2xhc3M9XCJjaGVja2JveFwiPlxyXG4gICAgICAgICAgPG1hdC1zbGlkZS10b2dnbGUgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQ/Lm5hbWVcIj5cclxuICAgICAgICAgICAge3tmaWVsZD8ubGFiZWx9fVxyXG4gICAgICAgICAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS0gZmlsZSB1cGxvYWQgLS0+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ1N3aXRjaENhc2U9XCInZmlsZSdcIj5cclxuICAgICAgICAgIDxtYXQtbGFiZWw+e3tmaWVsZD8ubGFiZWx9fTwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgPG1hdC1maWxlLWlucHV0IFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQ/Lm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJmaWVsZD8ucGxhY2Vob2xkZXJcIj48L21hdC1maWxlLWlucHV0PlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPCEtLSBpbWFnZSB1cGxvYWQgLS0+XHJcbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2ltYWdlJ1wiPlxyXG4gICAgICAgICAgPGRpdiAqbmdJZj1cImZpZWxkPy52YWx1ZVwiPlxyXG4gICAgICAgICAgICA8bWF0LWxhYmVsPnt7ZmllbGQ/LmxhYmVsfX08L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBmeExheW91dD1cInJvd1wiXHJcbiAgICAgICAgICAgICAgICAgZnhMYXlvdXRBbGlnbj1cInN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImZpbGUtaW5wdXQtaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgW3NyY109XCJmaWVsZD8udmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgYWx0PVwiZmllbGQ/LmxhYmVsXCIgLz5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbWF0LXJhaXNlZC1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJyZW1vdmVJbWFnZShmaWVsZClcIj5SZW1vdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgKm5nSWY9XCIhZmllbGQ/LnZhbHVlXCI+XHJcbiAgICAgICAgICAgIDxtYXQtbGFiZWw+e3tmaWVsZD8ubGFiZWx9fTwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICA8bWF0LWZpbGUtaW5wdXQgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZD8ubmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZmllbGQ/LnBsYWNlaG9sZGVyXCI+PC9tYXQtZmlsZS1pbnB1dD5cclxuXHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS0gdGV4dCBpbnB1dCAtLT5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgKm5nU3dpdGNoRGVmYXVsdD5cclxuICAgICAgICAgIDxtYXQtbGFiZWw+e3tmaWVsZD8ubGFiZWx9fTwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IG1hdElucHV0XHJcbiAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZD8ubmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImZpZWxkPy5wbGFjZWhvbGRlclwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjwvZm9ybT5cclxuIl19