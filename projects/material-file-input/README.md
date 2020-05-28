# Material File Upload Input

This is an Angular Material component library for having a file input component.

## Instalation

`npm i @weblauncher/material-file-input`

## Usage

Import module into your project `app.module.ts` or other sub-module:

```
import { MatFileInputModule } from '@weblauncher/material-file-input';
```

In your templates now you can add

```
<mat-form-field>
  <mat-label>File</mat-label>
  <mat-file-input [(ngModel)]="file" 
                  placeholder="Select one file"></mat-file-input>
</mat-form-field>
```

## Contribute

Read contribution guide here
