import { OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class FormComponent implements OnInit, OnDestroy {
    private formBuilder;
    fields: any[];
    save: EventEmitter<any>;
    valueChanges: EventEmitter<any>;
    form: FormGroup;
    Editor: any;
    private destroyed$;
    constructor(formBuilder: FormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    submit(): void;
    removeImage(field: any): void;
    private getFieldValue;
    private getFieldValidators;
    static ɵfac: i0.ɵɵFactoryDef<FormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<FormComponent, "mat-administration-form", never, { "fields": "fields"; }, { "save": "save"; "valueChanges": "valueChanges"; }, never, never>;
}
