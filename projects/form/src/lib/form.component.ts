import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatFormEntityField, MatFormSection, MatFormSectionsLayout } from './types';

@Component({
  selector: 'mat-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class MaterialFormComponent implements OnInit, OnDestroy {
  @Input() fields: MatFormEntityField[];

  @Input() layout: MatFormSectionsLayout;

  @Input() saveBtnText = 'Save';

  @Input() removeBtnText = 'Remove';

  @Input() disableOnInvalid = true;

  @Output() ngSubmit: EventEmitter<any> = new EventEmitter();

  @Output() valueChanges: EventEmitter<any> = new EventEmitter();

  form: FormGroup;

  sections: Partial<MatFormSection>[];

  private destroyed$: Subject<void> = new Subject();

  constructor(private formBuilder: FormBuilder) {
    // empty
  }

  ngOnInit(): void {
    if (this.fields) {
      this.form = this.formBuilder.group(
        this.fields?.reduce((prev, cur) => {
          return { ...prev, [cur?.name]: [this.getFieldValue(cur), this.getFieldValidators(cur)] };
        }, {})
      );

      this.form.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe(this.valueChanges);
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

  private getFieldValidators(field: MatFormEntityField) {
    return field.validatorOrOpts || [Validators.required];
  }
}
