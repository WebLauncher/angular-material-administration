# Material Form

[![npm version](https://badge.fury.io/js/%40weblauncher%2Fmaterial-form.svg)](https://badge.fury.io/js/%40weblauncher%2Fmaterial-form)

This is an Angular Material component library for having a material design form.

## Installation

### Install dependencies

`npm i @weblauncher/material-ckeditor @weblauncher/material-file-input @ckeditor/ckeditor5-angular @ckeditor/ckeditor5-build-classic`

### Install library

`npm i @weblauncher/material-form`

## Usage

Import module into your project `app.module.ts` or other sub-module:

```ts
import { MatFormModule } from '@weblauncher/material-form';
```

In your templates now you can add

```html
<mat-form
  [fields]="fields"
  [layout]="layout"
  [disableOnInvalid]="true"
  (ngSubmit)="submit($event);"
  (valueChanges)="formValueChanged($event)"
></mat-form>
```

## Contribute

[Angular Material Administration library contribution guide](https://github.com/WebLauncher/angular-material-administration/CONTRIBUTION.md)
