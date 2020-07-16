// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  /*Variables de configuracion de firebase*/
  firebaseConfig: {
    apiKey: "AIzaSyCy6aN7yAUAWQba3twcn5bD6Dl_uCeBAlY",
    authDomain: "formcontact-56fbc.firebaseapp.com",
    databaseURL: "https://formcontact-56fbc.firebaseio.com",
    projectId: "formcontact-56fbc",
    storageBucket: "formcontact-56fbc.appspot.com",
    messagingSenderId: "792827465455",
    appId: "1:792827465455:web:7d8f1b9dac83c14ea7d51a",
    measurementId: "G-2LZM7X24K6"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
