import {
  Component,
  Input,
  OnDestroy,
  HostBinding,
  ElementRef,
  Optional,
  Self,
  ViewChild,
  DoCheck
} from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import {
  UntypedFormBuilder,
  NgControl,
  UntypedFormControl,
  ControlValueAccessor,
  NgForm,
  FormGroupDirective
} from '@angular/forms';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { takeUntil } from 'rxjs/operators';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'mat-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss'],
  providers: [{ provide: MatFormFieldControl, useExisting: MatFileInputComponent }]
})
export class MatFileInputComponent
  implements OnDestroy, MatFormFieldControl<File[] | null>, ControlValueAccessor, DoCheck {
  static nextId = 0;

  stateChanges = new Subject<void>();

  focused = false;

  touched = false;

  // eslint-disable-next-line no-plusplus
  @HostBinding() id = `mat-file-input-${MatFileInputComponent.nextId++}`;

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
  get disabled(): boolean {
    return this.disabledValue;
  }

  set disabled(value: boolean) {
    this.disabledValue = coerceBooleanProperty(value);
    if (this.disabledValue) {
      this.form.disable();
    } else {
      this.form.enable();
    }
    this.stateChanges.next();
  }

  private disabledValue = false;

  @Input() buttonText = 'Choose...';

  errorState = false;

  controlType = 'mat-file-input';

  @HostBinding('attr.aria-describedby') describedBy = '';

  @Input() multiple = false;

  @Input() color!: string;

  onChange!: (value: File[] | null) => void;

  form: UntypedFormControl;

  set value(value: File[] | null) {
    this.form.setValue(value);
    this.stateChanges.next();
  }

  get value() {
    return this.form.value;
  }

  get empty() {
    return !this.form.value;
  }

  @ViewChild('file') file!: ElementRef;

  private destroyed$ = new Subject();

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    fb: UntypedFormBuilder,
    private fm: FocusMonitor,
    private elRef: ElementRef<HTMLElement>,
    public _defaultErrorStateMatcher: ErrorStateMatcher,
    @Optional() public _parentForm: NgForm,
    @Optional() public _parentFormGroup: FormGroupDirective
  ) {
    // Replace the provider from above with this.
    if (this.ngControl != null) {
      // Setting the value accessor directly (instead of using
      // the providers) to avoid running into a circular import.
      this.ngControl.valueAccessor = this as any;
    }
    this.form = new UntypedFormControl(null);
    this.form.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe((value) => {
      if (this.onChange) {
        this.onChange(value);
      }
    });
    fm.monitor(elRef.nativeElement, true).subscribe((origin) => {
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

  ngDoCheck(): void {
    if (this.ngControl) {
      // We need to re-evaluate this on every change detection cycle, because there are some
      // error triggers that we can't subscribe to (e.g. parent form submissions). This means
      // that whatever logic is in here has to be super lean or we risk destroying the performance.
      this.updateErrorState();
    }
  }

  onContainerClick(event: MouseEvent) {
    if ((event.target as Element).tagName.toLowerCase() !== 'input') {
      this.elRef?.nativeElement?.querySelector('input')?.focus();
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

  registerOnTouched() {
    // empty
  }

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

    return this.multiple ? this.value.map((file) => file?.name).join(', ') : this.value[0]?.name;
  }

  onFocusIn(event: FocusEvent) {
    if (!this.focused) {
      this.focused = true;
      this.stateChanges.next();
    }
  }

  onFocusOut(event: FocusEvent) {
    if (!this.elRef.nativeElement.contains(event.relatedTarget as Element)) {
      this.touched = true;
      this.focused = false;
      this.onTouched();
      this.stateChanges.next();
    }
  }

  onTouched() {}

  private updateErrorState() {
    const parent = this._parentFormGroup || this._parentForm;

    const oldState = this.errorState;
    const newState = (this.ngControl?.invalid || this.form.invalid) && (this.touched || parent.submitted);

    if (oldState !== newState) {
      this.errorState = newState;
      this.stateChanges.next();
    }
  }
}
