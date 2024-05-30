# Material Administration

[![npm version](https://badge.fury.io/js/%40weblauncher%2Fmaterial-administration.svg)](https://badge.fury.io/js/%40weblauncher%2Fmaterial-administration)

This is an Angular component library to generate material design UI to render an administration app for different datasources (Firestore default).

## Demo

https://weblauncher-administration.web.app/ 

~~~
User:       test@test.com

Password:   testing
~~~

## Install

```npm i @weblauncher/material-administration```

## Import

The next steps describes how to import for Firebase Firestore data source.

Provide firebase modules using `@angular/fire`.

In your `app.module.ts` import the module as below

~~~ts
imports: [
  ...
  MaterialAdministrationModule
  ...
]
~~~

Add your site metadata provider as configured in [site metadata configuration documentation](./docs/site-metadata-configuration.md)

~~~ts
  providers: [
    ...
    {
      provide: MAT_ADMINISTRATION_METADATA,
      useValue: SiteMetadata
    },
    ...
  ]
~~~

## Contribute

[Angular Material Administration library contribution guide](https://github.com/WebLauncher/angular-material-administration/CONTRIBUTION.md)
