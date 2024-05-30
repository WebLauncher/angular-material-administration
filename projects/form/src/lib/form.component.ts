import {
 Component, OnInit, Input, Output, EventEmitter, OnDestroy, ChangeDetectionStrategy,
} from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
  UntypedFormControl,
  FormControl,
  FormArray,
} from '@angular/forms';
import {
 map, takeUntil,
} from 'rxjs/operators';
import { Subject } from 'rxjs';
import {
 MatFormEntityField, MatFormSection, MatFormSectionsLayout, EntityFieldInputType,
} from './types';

@Component({
  selector: 'mat-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialFormComponent implements OnInit, OnDestroy {
  @Input() fields!: Partial<MatFormEntityField>[] | undefined | null;

  @Input() layout!: MatFormSectionsLayout;

  @Input() saveBtnText = 'Save';

  @Input() removeBtnText = 'Remove';

  @Input() disableOnInvalid = true;

  @Output() ngSubmit: EventEmitter<any> = new EventEmitter();

  @Output() valueChanges: EventEmitter<any> = new EventEmitter();

  @Output() validChanges: EventEmitter<boolean> = new EventEmitter();

  form!: UntypedFormGroup;

  sections!: Partial<MatFormSection>[];

  EntityFieldInputType = EntityFieldInputType;

  formStyles = this.getLayoutStyles(this.layout);

  private destroyed$: Subject<void> = new Subject();

  constructor(private formBuilder: UntypedFormBuilder) {
    // empty
  }

  ngOnInit(): void {
    if (this.fields) {
      this.form = this.formBuilder.group(
        this.fields?.reduce((prev, cur) => ({ ...prev,
[cur?.name ?? '']: this.getField(cur) }), {}),
      );

      this.form.valueChanges
        .pipe(
          map((value) => this.mapFormValue(value)),
          takeUntil(this.destroyed$),
        )
        .subscribe(this.valueChanges);
      this.form.statusChanges.pipe(takeUntil(this.destroyed$)).subscribe(() => this.validChanges.emit(this.form.valid));
    }

    this.sections = this.getSectionsWithFields() as Partial<MatFormSection>[];
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

  removeImage(field: MatFormEntityField) {
    if (field?.name) {
      this.form.get(field.name)?.setValue(null);
    }
  }

  get disabled(): boolean {
    return this.disableOnInvalid && this.form.invalid;
  }

  getLayoutStyles(layout: any) {
    return {
      'flex-flow': this.layout?.direction ?? 'column wrap',
      'place-content': `${this.layout?.crossAlign ?? 'stretch'} ${this.layout?.mainAlign ?? 'center'}`,
    };
  }

  showError(field: MatFormEntityField, messageKey: string | unknown) {
    return (
      messageKey &&
      field?.validatorMessages &&
      field?.name &&
      this.form.get(field?.name)?.invalid &&
      this.form.get(field?.name)?.hasError(messageKey as string)
    );
  }

  private getSectionsWithFields() {
    if (!this.layout?.sections) {
      return [
        {
          fields: this.fields,
          layout: this.layout,
        },
      ];
    }

    return this.layout?.sections.map((section) => ({
      ...section,
      fields: ((section?.fields ?? []) as string[]).map((fieldName) =>
        this.fields?.find((field) => field?.name === fieldName),
      ),
      layout: section?.layout ?? this.layout,
    }));
  }

  private getFieldValue(field: Partial<MatFormEntityField>) {
    return field?.value;
  }

  private getFieldValidators(field: Partial<MatFormEntityField>) {
    return field.validatorOrOpts ?? [Validators.required];
  }

  private getField(field: Partial<MatFormEntityField>) {
    // see if field is a form array field
    if (field?.inputType === EntityFieldInputType.MultiCheckbox) {
      return new FormArray([
        ...(field?.options?.map(
          (option: { value: any; label: string; valueObject?: any }) =>
            new FormControl(this.getFieldValue(field)?.includes(option?.value)),
        ) ?? []),
      ]);
    }

    return new UntypedFormControl(this.getFieldValue(field), this.getFieldValidators(field));
  }

  private mapFormValue(formValue: any) {
    return this.fields?.reduce(
      (prev, cur) => ({ ...prev,
[cur?.name ?? '']: this.getFormFieldValue(cur, formValue?.[cur?.name ?? '']) }),
      {},
    );
  }

  private getFormFieldValue(field: Partial<MatFormEntityField>, formValue: any) {
    if (field?.inputType === EntityFieldInputType.MultiCheckbox) {
      return field?.options?.filter((_, i) => !!formValue?.[i]).map((option) => option?.value);
    }

    return formValue;
  }
}
