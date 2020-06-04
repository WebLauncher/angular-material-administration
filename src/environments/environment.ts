// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBSzQMavDTC_xRHdGxmHGrzBhYHbIiCEss',
    authDomain: 'weblauncher-administration.firebaseapp.com',
    databaseURL: 'https://weblauncher-administration.firebaseio.com',
    projectId: 'weblauncher-administration',
    storageBucket: 'weblauncher-administration.appspot.com',
    messagingSenderId: '384505651321',
    appId: '1:384505651321:web:5d8b767431b0ff218534a8',
    measurementId: 'G-NR03P4BZ8K'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// eslint-disable-next-line import/first
import 'zone.js/dist/zone-error'; // Included with Angular CLI.
