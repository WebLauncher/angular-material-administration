import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatFormEntityField, MatFormSection, MatFormSectionsLayout, EntityFieldInputType } from './types';

@Component({
  selector: 'mat-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaterialFormComponent implements OnInit, OnDestroy {
  @Input() fields: Partial<MatFormEntityField>[];

  @Input() layout: MatFormSectionsLayout;

  @Input() saveBtnText = 'Save';

  @Input() removeBtnText = 'Remove';

  @Input() disableOnInvalid = true;

  @Output() ngSubmit: EventEmitter<any> = new EventEmitter();

  @Output() valueChanges: EventEmitter<any> = new EventEmitter();

  @Output() validChanges: EventEmitter<boolean> = new EventEmitter();

  form: FormGroup;

  sections: Partial<MatFormSection>[];

  EntityFieldInputType = EntityFieldInputType;

  private destroyed$: Subject<void> = new Subject();

  constructor(private formBuilder: FormBuilder) {
    // empty
  }

  ngOnInit(): void {
    if (this.fields) {
      this.form = this.formBuilder.group(
        this.fields?.reduce((prev, cur) => {
          return { ...prev, [cur?.name]: this.getField(cur) };
        }, {})
      );

      this.form.valueChanges
        .pipe(
          map((value) => this.mapFormValue(value)),
          takeUntil(this.destroyed$)
        )
        .subscribe(this.valueChanges);
      this.form.statusChanges.pipe(takeUntil(this.destroyed$)).subscribe(() => this.validChanges.emit(this.form.valid));
    }

    this.sections = this.getSectionsWithFields();
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  submit() {
    if (this.form.valid) {
      this.ngSubmit.emit(this.form.value);
    }
  }

  removeImage(field) {
    this.form.get(field.name).setValue(null);
  }

  get disabled(): boolean {
    return this.disableOnInvalid && this.form.invalid;
  }

  showError(field: any, messageKey: string | unknown) {
    return (
      messageKey &&
      field?.validatorMessages &&
      this.form.get(field?.name).invalid &&
      this.form.get(field?.name).hasError(messageKey as string)
    );
  }

  private getSectionsWithFields() {
    if (!this.layout || !this.layout?.sections) {
      return [
        {
          fields: this.fields,
          layout: this.layout
        }
      ];
    }

    return this.layout?.sections.map((section) => ({
      ...section,
      fields: ((section?.fields || []) as string[]).map((fieldName) =>
        this.fields.find((field) => field?.name === fieldName)
      ),
      layout: section?.layout || this.layout
    }));
  }

  private getFieldValue(field) {
    return field?.value;
  }

  private getFieldValidators(field: Partial<MatFormEntityField>) {
    return field.validatorOrOpts || [Validators.required];
  }

  private getField(field: Partial<MatFormEntityField>) {
    // see if field is a form array field
    if (field?.inputType === EntityFieldInputType.MultiCheckbox) {
      return new FormArray([
        ...field?.options.map((option) => new FormControl(this.getFieldValue(field)?.includes(option?.value)))
      ]);
    }

    return new FormControl(this.getFieldValue(field), this.getFieldValidators(field));
  }

  private mapFormValue(formValue) {
    return this.fields?.reduce((prev, cur) => {
      return { ...prev, [cur?.name]: this.getFormFieldValue(cur, formValue?.[cur?.name]) };
    }, {});
  }

  private getFormFieldValue(field: Partial<MatFormEntityField>, formValue) {
    if (field?.inputType === EntityFieldInputType.MultiCheckbox) {
      return field?.options.filter((_, i) => !!formValue?.[i]).map((option) => option?.value);
    }

    return formValue;
  }
}
