import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { takeUntil, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'mat-administration-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit, OnDestroy {
  @Input() fields: any[];
  @Output() save: EventEmitter<any> = new EventEmitter();
  @Output() valueChanges: EventEmitter<any> = new EventEmitter();

  form: FormGroup;
  Editor = ClassicEditor;

  private destroyed$: Subject<void> = new Subject();

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    if (this.fields) {
      this.form = this.formBuilder.group(
        this.fields?.reduce((prev, cur) => {
          return { ...prev, [cur?.name]: [this.getFieldValue(cur), this.getFieldValidators(cur)] };
        }, {})
      );

      this.form.valueChanges.pipe(
        takeUntil(this.destroyed$)
      ).subscribe(this.valueChanges);
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

  private getFieldValue(field) {
    return field?.value;
  }

  private getFieldValidators(field) {
    return [Validators.required];
  }
}
