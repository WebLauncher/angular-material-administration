import { FormGroupDirective, NgControl, NgForm } from '@angular/forms';
import { CanUpdateErrorStateCtor, ErrorStateMatcher, mixinErrorState } from '@angular/material/core';

// Boilerplate for applying mixins to FileInput
/** @docs-private */
export class MaterialCkeditorBase {
  constructor(
    public _defaultErrorStateMatcher: ErrorStateMatcher,
    public _parentForm: NgForm,
    public _parentFormGroup: FormGroupDirective,
    public ngControl: NgControl
  ) {}
}

/**
 * Allows to use a custom ErrorStateMatcher with the mat-file-input component
 */
export const MaterialCkeditorMixinBase: CanUpdateErrorStateCtor & typeof MaterialCkeditorBase = mixinErrorState(
  MaterialCkeditorBase
);
