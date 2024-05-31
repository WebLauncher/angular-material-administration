# Material File Upload Input

[![npm version](https://badge.fury.io/js/%40weblauncher%2Fmaterial-file-input.svg)](https://badge.fury.io/js/%40weblauncher%2Fmaterial-file-input)

This is an Angular Material component library for having a file input component.

## Instalation

`npm i @weblauncher/material-file-input`

## Usage

Import module into your project `app.module.ts` or other sub-module:

```ts
import { MatFileInputModule } from '@weblauncher/material-file-input';
```

In your templates now you can add

```html
<mat-form-field>
  <mat-label>File</mat-label>
  <mat-file-input [(ngModel)]="file" 
                  placeholder="Select one file"></mat-file-input>
</mat-form-field>
```

## Contribute

[Angular Material Administration library contribution guide](https://github.com/WebLauncher/angular-material-administration/CONTRIBUTION.md)
