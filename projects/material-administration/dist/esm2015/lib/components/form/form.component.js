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
const _c0 = function (a0) { return { field: a0 }; };
function FormComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, FormComponent_ng_container_1_div_1_ng_container_1_Template, 1, 0, "ng-container", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r4 = ctx.$implicit;
    i0.ɵɵnextContext(2);
    const _r1 = i0.ɵɵreference(3);
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
    const ctx_r0 = i0.ɵɵnextContext();
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
    const field_r6 = i0.ɵɵnextContext().field;
    const ctx_r7 = i0.ɵɵnextContext();
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
    const field_r6 = i0.ɵɵnextContext().field;
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
    const option_r20 = ctx.$implicit;
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
    const field_r6 = i0.ɵɵnextContext().field;
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
    const option_r23 = ctx.$implicit;
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
    const field_r6 = i0.ɵɵnextContext().field;
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
    const _r25 = i0.ɵɵreference(6);
    const field_r6 = i0.ɵɵnextContext().field;
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
    const field_r6 = i0.ɵɵnextContext().field;
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
    const field_r6 = i0.ɵɵnextContext().field;
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
    const field_r6 = i0.ɵɵnextContext().field;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(field_r6 == null ? null : field_r6.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formControlName", field_r6 == null ? null : field_r6.name)("placeholder", field_r6 == null ? null : field_r6.placeholder);
} }
function FormComponent_ng_template_2_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 29);
    i0.ɵɵelement(4, "img", 30);
    i0.ɵɵelementStart(5, "button", 31);
    i0.ɵɵlistener("click", function FormComponent_ng_template_2_div_10_div_1_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r34); const field_r6 = i0.ɵɵnextContext(2).field; const ctx_r32 = i0.ɵɵnextContext(); return ctx_r32.removeImage(field_r6); });
    i0.ɵɵtext(6, "Remove");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r6 = i0.ɵɵnextContext(2).field;
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
    const field_r6 = i0.ɵɵnextContext(2).field;
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
    const field_r6 = i0.ɵɵnextContext().field;
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
    const field_r6 = i0.ɵɵnextContext().field;
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
    const field_r6 = ctx.field;
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
export class FormComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.save = new EventEmitter();
        this.valueChanges = new EventEmitter();
        this.Editor = ClassicEditor;
        this.destroyed$ = new Subject();
    }
    ngOnInit() {
        var _a;
        if (this.fields) {
            this.form = this.formBuilder.group((_a = this.fields) === null || _a === void 0 ? void 0 : _a.reduce((prev, cur) => {
                return Object.assign(Object.assign({}, prev), { [cur === null || cur === void 0 ? void 0 : cur.name]: [this.getFieldValue(cur), this.getFieldValidators(cur)] });
            }, {}));
            this.form.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe(this.valueChanges);
        }
    }
    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
    submit() {
        if (this.form.valid) {
            this.save.emit(this.form.value);
        }
    }
    removeImage(field) {
        field.value = null;
        this.form.get(field.name).setValue(null);
    }
    getFieldValue(field) {
        return field === null || field === void 0 ? void 0 : field.value;
    }
    getFieldValidators(field) {
        return [Validators.required];
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXRlcmlhbC1hZG1pbmlzdHJhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Zvcm0vZm9ybS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9mb3JtL2Zvcm0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNuSCxPQUFPLEVBQTBCLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxTQUFTLEVBQU8sTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sS0FBSyxhQUFhLE1BQU0sbUNBQW1DLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0M3RCx3QkFBb0Y7Ozs7SUFEdEYsMkJBQ0U7SUFBQSxxR0FBcUU7SUFDdkUsaUJBQU07Ozs7O0lBRFUsZUFBc0Q7SUFBdEQsc0NBQXNELGlFQUFBOzs7SUFIeEUsNkJBRUU7SUFBQSw2RUFDRTtJQUVGLDhCQUNFO0lBQUEsaUNBRXNCO0lBQUEscUJBQ3RCO0lBQUEsaUJBQVM7SUFDWCxpQkFBTTtJQUNSLDBCQUFlOzs7SUFUUixlQUE0QjtJQUE1Qix1Q0FBNEI7OztJQWdCN0IsK0JBRUU7SUFBQSw2QkFBTztJQUFBLFlBQWdCO0lBQUEsaUJBQVE7SUFDL0IsK0JBQ3VDO0lBQ3pDLGlCQUFNOzs7O0lBSEcsZUFBZ0I7SUFBaEIsOERBQWdCO0lBQ2IsZUFBK0I7SUFBL0IseUVBQStCLHlCQUFBOzs7SUFJM0Msc0NBQ0U7SUFBQSxpQ0FBVztJQUFBLFlBQWdCO0lBQUEsaUJBQVk7SUFDdkMsK0JBQ3FEO0lBQ3ZELGlCQUFpQjs7O0lBSEosZUFBZ0I7SUFBaEIsOERBQWdC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bXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0ICogYXMgQ2xhc3NpY0VkaXRvciBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWJ1aWxkLWNsYXNzaWMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtYXQtYWRtaW5pc3RyYXRpb24tZm9ybScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvcm0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Zvcm0uY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBmaWVsZHM6IGFueVtdO1xyXG4gIEBPdXRwdXQoKSBzYXZlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgZm9ybTogRm9ybUdyb3VwO1xyXG4gIEVkaXRvciA9IENsYXNzaWNFZGl0b3I7XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXJcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmZpZWxkcykge1xyXG4gICAgICB0aGlzLmZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKFxyXG4gICAgICAgIHRoaXMuZmllbGRzPy5yZWR1Y2UoKHByZXYsIGN1cikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHsgLi4ucHJldiwgW2N1cj8ubmFtZV06IFt0aGlzLmdldEZpZWxkVmFsdWUoY3VyKSwgdGhpcy5nZXRGaWVsZFZhbGlkYXRvcnMoY3VyKV0gfTtcclxuICAgICAgICB9LCB7fSlcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMuZm9ybS52YWx1ZUNoYW5nZXMucGlwZShcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKVxyXG4gICAgICApLnN1YnNjcmliZSh0aGlzLnZhbHVlQ2hhbmdlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3llZCQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIHN1Ym1pdCgpIHtcclxuICAgIGlmICh0aGlzLmZvcm0udmFsaWQpIHtcclxuICAgICAgdGhpcy5zYXZlLmVtaXQodGhpcy5mb3JtLnZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZUltYWdlKGZpZWxkKSB7XHJcbiAgICBmaWVsZC52YWx1ZSA9IG51bGw7XHJcbiAgICB0aGlzLmZvcm0uZ2V0KGZpZWxkLm5hbWUpLnNldFZhbHVlKG51bGwpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRGaWVsZFZhbHVlKGZpZWxkKSB7XHJcbiAgICByZXR1cm4gZmllbGQ/LnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRGaWVsZFZhbGlkYXRvcnMoZmllbGQpIHtcclxuICAgIHJldHVybiBbVmFsaWRhdG9ycy5yZXF1aXJlZF07XHJcbiAgfVxyXG59XHJcbiIsIjxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybVwiXHJcbiAgICAgIChuZ1N1Ym1pdCk9XCJzdWJtaXQoKVwiPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWVsZHNcIj5cclxuXHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBmaWVsZHNcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImZvcm1GaWVsZDsgY29udGV4dDoge2ZpZWxkOiBmaWVsZH1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1lbmRcIj5cclxuICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvblxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiPlNhdmVcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgPG5nLXRlbXBsYXRlICNmb3JtRmllbGRcclxuICAgICAgICAgICAgICAgbGV0LWZpZWxkPVwiZmllbGRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkLWNvbnRhaW5lclwiIFtuZ1N0eWxlXT1cImZpZWxkPy5zdHlsZT8uZm9ybVwiPlxyXG4gICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJmaWVsZD8uaW5wdXRUeXBlXCI+XHJcbiAgICAgICAgPCEtLSBja2VkaXRvciAtLT5cclxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInY2tlZGl0b3InXCJcclxuICAgICAgICAgICAgIGNsYXNzPVwiY2tlZGl0b3JcIj5cclxuICAgICAgICAgIDxsYWJlbD57e2ZpZWxkPy5sYWJlbH19PC9sYWJlbD5cclxuICAgICAgICAgIDxja2VkaXRvciBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkPy5uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBbZWRpdG9yXT1cIkVkaXRvclwiPjwvY2tlZGl0b3I+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPCEtLSB0ZXh0YXJlYSAtLT5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgKm5nU3dpdGNoQ2FzZT1cIid0ZXh0YXJlYSdcIj5cclxuICAgICAgICAgIDxtYXQtbGFiZWw+e3tmaWVsZD8ubGFiZWx9fTwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgPHRleHRhcmVhIG1hdElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZD8ubmFtZVwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8IS0tIHNlbGVjdCAtLT5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgKm5nU3dpdGNoQ2FzZT1cIidzZWxlY3QnXCI+XHJcbiAgICAgICAgICA8bWF0LWxhYmVsPnt7ZmllbGQ/LmxhYmVsfX08L21hdC1sYWJlbD5cclxuICAgICAgICAgIDxtYXQtc2VsZWN0IFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQ/Lm5hbWVcIj5cclxuICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBmaWVsZD8ub3B0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJvcHRpb24/LnZhbHVlXCI+XHJcbiAgICAgICAgICAgICAge3tvcHRpb24/LmxhYmVsfX1cclxuICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPCEtLSByYWRpbyAtLT5cclxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCIncmFkaW8nXCJcclxuICAgICAgICAgICAgIGNsYXNzPVwicmFkaW9cIj5cclxuICAgICAgICAgIDxtYXQtbGFiZWw+e3tmaWVsZD8ubGFiZWx9fTo8L21hdC1sYWJlbD5cclxuICAgICAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZD8ubmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGZpZWxkPy5vcHRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIm9wdGlvbj8udmFsdWVcIj57e29wdGlvbj8ubGFiZWx9fTwvbWF0LXJhZGlvLWJ1dHRvbj5cclxuICAgICAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS0gZGF0ZXBpY2tlciAtLT5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgKm5nU3dpdGNoQ2FzZT1cIidkYXRlcGlja2VyJ1wiPlxyXG4gICAgICAgICAgPG1hdC1sYWJlbD57e2ZpZWxkPy5sYWJlbH19PC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgbWF0SW5wdXRcclxuICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkPy5uYW1lXCJcclxuICAgICAgICAgICAgICAgICBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIj5cclxuICAgICAgICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JdPVwicGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XHJcbiAgICAgICAgICA8bWF0LWRhdGVwaWNrZXIgdG91Y2hVaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICNwaWNrZXI+PC9tYXQtZGF0ZXBpY2tlcj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDwhLS0gY2hlY2tib3ggLS0+XHJcbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94J1wiXHJcbiAgICAgICAgICAgICBjbGFzcz1cImNoZWNrYm94XCI+XHJcbiAgICAgICAgICA8bWF0LWNoZWNrYm94IFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQ/Lm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwidHJ1ZVwiPnt7ZmllbGQ/LmxhYmVsfX08L21hdC1jaGVja2JveD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8IS0tIHNsaWRlIHRvZ2xlIC0tPlxyXG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIid0b2dnbGUnXCJcclxuICAgICAgICAgICAgIGNsYXNzPVwiY2hlY2tib3hcIj5cclxuICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkPy5uYW1lXCI+XHJcbiAgICAgICAgICAgIHt7ZmllbGQ/LmxhYmVsfX1cclxuICAgICAgICAgIDwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8IS0tIGZpbGUgdXBsb2FkIC0tPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdTd2l0Y2hDYXNlPVwiJ2ZpbGUnXCI+XHJcbiAgICAgICAgICA8bWF0LWxhYmVsPnt7ZmllbGQ/LmxhYmVsfX08L21hdC1sYWJlbD5cclxuICAgICAgICAgIDxtYXQtZmlsZS1pbnB1dCBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkPy5uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZmllbGQ/LnBsYWNlaG9sZGVyXCI+PC9tYXQtZmlsZS1pbnB1dD5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDwhLS0gaW1hZ2UgdXBsb2FkIC0tPlxyXG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidpbWFnZSdcIj5cclxuICAgICAgICAgIDxkaXYgKm5nSWY9XCJmaWVsZD8udmFsdWVcIj5cclxuICAgICAgICAgICAgPG1hdC1sYWJlbD57e2ZpZWxkPy5sYWJlbH19PC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgZnhMYXlvdXQ9XCJyb3dcIlxyXG4gICAgICAgICAgICAgICAgIGZ4TGF5b3V0QWxpZ249XCJzdGFydFwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJmaWxlLWlucHV0LWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgIFtzcmNdPVwiZmllbGQ/LnZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgIGFsdD1cImZpZWxkPy5sYWJlbFwiIC8+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG1hdC1yYWlzZWQtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwicmVtb3ZlSW1hZ2UoZmllbGQpXCI+UmVtb3ZlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ0lmPVwiIWZpZWxkPy52YWx1ZVwiPlxyXG4gICAgICAgICAgICA8bWF0LWxhYmVsPnt7ZmllbGQ/LmxhYmVsfX08L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgPG1hdC1maWxlLWlucHV0IFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQ/Lm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImZpZWxkPy5wbGFjZWhvbGRlclwiPjwvbWF0LWZpbGUtaW5wdXQ+XHJcblxyXG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8IS0tIHRleHQgaW5wdXQgLS0+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ1N3aXRjaERlZmF1bHQ+XHJcbiAgICAgICAgICA8bWF0LWxhYmVsPnt7ZmllbGQ/LmxhYmVsfX08L21hdC1sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dFxyXG4gICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQ/Lm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJmaWVsZD8ucGxhY2Vob2xkZXJcIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcblxyXG48L2Zvcm0+XHJcbiJdfQ==