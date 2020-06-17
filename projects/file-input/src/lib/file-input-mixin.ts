import { FormGroupDirective, NgControl, NgForm } from '@angular/forms';
import { CanUpdateErrorStateCtor, ErrorStateMatcher, mixinErrorState } from '@angular/material/core';

// Boilerplate for applying mixins to FileInput
/** @docs-private */
export class MaterialFileInputBase {
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
export const MaterialFileInputMixinBase: CanUpdateErrorStateCtor & typeof MaterialFileInputBase = mixinErrorState(
  MaterialFileInputBase
);
