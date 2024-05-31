# Material Ckeditor

[![npm version](https://badge.fury.io/js/%40weblauncher%2Fmaterial-ckeditor.svg)](https://badge.fury.io/js/%40weblauncher%2Fmaterial-ckeditor)

This is an Angular Material component library for having a file input component.

## Installation

### Install dependencies

`npm i @ckeditor/ckeditor5-angular @ckeditor/ckeditor5-build-classic`

### Install library

`npm i @weblauncher/material-ckeditor`

## Usage

Import module into your project `app.module.ts` or other sub-module:

```ts
import { MatCkeditorModule } from '@weblauncher/material-ckeditor';
```

In your templates now you can add

```html
<mat-form-field>
  <mat-label>Editor</mat-label>
  <mat-ckeditor [(ngModel)]="content" 
                  placeholder="Select one file"></mat-ckeditor>
</mat-form-field>
```

## Contribute

[Angular Material Administration library contribution guide](https://github.com/WebLauncher/angular-material-administration/CONTRIBUTION.md)
