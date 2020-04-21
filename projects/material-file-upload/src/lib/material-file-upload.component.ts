import { Component, ChangeDetectionStrategy, Input, OnDestroy, HostBinding, ElementRef, Optional, Self, ViewChild } from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { FormBuilder, NgControl, FormControl } from '@angular/forms';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'mat-file-upload',
  templateUrl: './material-file-upload.component.html',
  styleUrls: ['./material-file-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: MatFormFieldControl, useExisting: MatFileUploadComponent }],
})
export class MatFileUploadComponent implements OnDestroy, MatFormFieldControl<File[]>{
  static nextId = 0;
  @HostBinding() id = `mat-material-file-upload-${MatFileUploadComponent.nextId++}`;
  @HostBinding('class.floating')
  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }

  @Input()
  get placeholder() {
    return this.placeholderValue;
  }
  set placeholder(plh) {
    this.placeholderValue = plh;
    this.stateChanges.next();
  }
  private placeholderValue = '';

  @Input()
  get required() {
    return this.requiredValue;
  }
  set required(req) {
    this.requiredValue = coerceBooleanProperty(req);
    this.stateChanges.next();
  }
  private requiredValue = false;

  @Input()
  get disabled(): boolean { return this.disabledValue; }
  set disabled(value: boolean) {
    this.disabledValue = coerceBooleanProperty(value);
    this.disabledValue ? this.form.disable() : this.form.enable();
    this.stateChanges.next();
  }
  private disabledValue = false;

  @Input() buttonText = 'Choose...';

  errorState = false;
  controlType = 'mat-material-file-upload';

  @HostBinding('attr.aria-describedby') describedBy = '';

  @Input() multiple = false;
  onChange: (value) => void;
  form: FormControl;
  stateChanges = new Subject<void>();
  focused = false;

  set value(value: File[]) {
    this.form.setValue(value);
    this.stateChanges.next();
  }

  get value() {
    return this.form.value;
  }

  get empty() {
    return !this.form.value;
  }

  @ViewChild('file') file;

  private destroyed$ = new Subject();

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    fb: FormBuilder,
    private fm: FocusMonitor,
    private elRef: ElementRef<HTMLElement>
  ) {
    // Replace the provider from above with this.
    if (this.ngControl != null) {
      // Setting the value accessor directly (instead of using
      // the providers) to avoid running into a circular import.
      this.ngControl.valueAccessor = (this as any);
    }
    this.form = new FormControl(null);
    this.form.valueChanges.pipe(
      takeUntil(this.destroyed$)
    ).subscribe(value => {
      if (this.onChange) {
        this.onChange(value);
      }
    });
    fm.monitor(elRef.nativeElement, true).subscribe(origin => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this.fm.stopMonitoring(this.elRef.nativeElement);
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onContainerClick(event: MouseEvent) {
    if ((event.target as Element).tagName.toLowerCase() !== 'input') {
      this.elRef.nativeElement.querySelector('input').focus();
    }
  }

  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }

  writeValue(value: File[]) {
    this.value = value;
  }

  registerOnChange(fn: (value: any) => void) {
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
    const files = Object.values(this.file.nativeElement.files) as File[];
    this.value = files;
  }

  getName() {
    if (!this.value) {
      return '';
    }

    return this.multiple ? this.value.map(file => file?.name).join(', ') : this.value[0]?.name;
  }
}
