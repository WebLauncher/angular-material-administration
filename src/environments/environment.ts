// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/plugins/zone-error';

export const environment = {
  production: false,
  firebase: {
    projectId: 'weblauncher-administration',
    appId: '1:384505651321:web:5d8b767431b0ff218534a8',
    databaseURL: 'https://weblauncher-administration.firebaseio.com',
    storageBucket: 'weblauncher-administration.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyBSzQMavDTC_xRHdGxmHGrzBhYHbIiCEss',
    authDomain: 'weblauncher-administration.firebaseapp.com',
    messagingSenderId: '384505651321',
    measurementId: 'G-NR03P4BZ8K',
  },
}; // Included with Angular CLI.
