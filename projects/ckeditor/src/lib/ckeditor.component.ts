import {
  Component,
  OnDestroy,
  DoCheck,
  HostBinding,
  Input,
  ViewChild,
  Optional,
  Self,
  ElementRef
} from '@angular/core';

import { FormControl, ControlValueAccessor, NgControl, FormBuilder, NgForm, FormGroupDirective } from '@angular/forms';
import { CKEditor5 } from '@ckeditor/ckeditor5-angular';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { MatFormFieldControl } from '@angular/material/form-field';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subject } from 'rxjs';
import { FocusMonitor } from '@angular/cdk/a11y';
import { ErrorStateMatcher } from '@angular/material/core';
import { takeUntil } from 'rxjs/operators';
import { MaterialCkeditorMixinBase } from './ckeditor-mixin';

@Component({
  selector: 'mat-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.scss'],
  providers: [{ provide: MatFormFieldControl, useExisting: MaterialCkeditorComponent }]
})
export class MaterialCkeditorComponent extends MaterialCkeditorMixinBase
  implements OnDestroy, MatFormFieldControl<string>, ControlValueAccessor, DoCheck {
  static nextId = 0;

  Editor = ClassicEditor;

  // eslint-disable-next-line no-plusplus
  @HostBinding() id = `mat-ckeditor-${MaterialCkeditorComponent.nextId++}`;

  @HostBinding('class.floating')
  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }

  @Input() config: CKEditor5.Config;

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

  controlType = 'mat-ckeditor';

  @HostBinding('attr.aria-describedby') describedBy = '';

  @Input() multiple = false;

  onChange: (value) => void;

  form: FormControl;

  stateChanges = new Subject<void>();

  focused = false;

  set value(value: string) {
    this.form.setValue(value);
    this.stateChanges.next();
  }

  get value() {
    return this.form.value;
  }

  get empty() {
    return !this.form.value;
  }

  @ViewChild('editor') editor;

  private destroyed$ = new Subject();

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    fb: FormBuilder,
    private fm: FocusMonitor,
    private elRef: ElementRef<HTMLElement>,
    public _defaultErrorStateMatcher: ErrorStateMatcher,
    @Optional() public _parentForm: NgForm,
    @Optional() public _parentFormGroup: FormGroupDirective
  ) {
    super(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);

    // Replace the provider from above with this.
    if (this.ngControl != null) {
      // Setting the value accessor directly (instead of using
      // the providers) to avoid running into a circular import.
      this.ngControl.valueAccessor = this as any;
    }
    this.form = new FormControl(null);
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
      this.elRef.nativeElement.querySelector('input').focus();
    }
  }

  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }

  writeValue(value: string) {
    this.value = value;
  }

  registerOnChange(fn: (value: any) => void) {
    this.onChange = fn;
  }

  registerOnTouched() {
    // empty
  }
}
