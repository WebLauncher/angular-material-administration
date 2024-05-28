import { FormGroupDirective, NgControl, NgForm } from '@angular/forms';
import { ErrorStateMatcher, mixinErrorState } from '@angular/material/core';
import { Subject } from 'rxjs';

// Boilerplate for applying mixins to FileInput
/** @docs-private */
export class MaterialFileInputBase {
  constructor(
    public _defaultErrorStateMatcher: ErrorStateMatcher,
    public _parentForm: NgForm,
    public _parentFormGroup: FormGroupDirective,
    public ngControl: NgControl,
    public stateChanges: Subject<void>
  ) {}
}

/**
 * Allows to use a custom ErrorStateMatcher with the mat-file-input component
 */
export const MaterialFileInputMixinBase = mixinErrorState(MaterialFileInputBase);
