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

Create app name Firebase factory function

~~~ts
export function firebaseAppNameFactory() {
  return 'Your Firebase App Name';
}
~~~

In `environment.ts` (and other environment files) define `firebase` config as described in [Angular Firebase documentation](https://github.com/angular/angularfire/blob/master/docs/install-and-setup.md)

In your `app.module.ts` import the module as below

~~~ts
imports: [
  ...
  MaterialAdministrationModule.forRoot(environment.firebase, firebaseAppNameFactory),
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
