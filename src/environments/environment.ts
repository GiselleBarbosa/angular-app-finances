// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const environment = {
  production: false,
  apiKey: "AIzaSyAPzboGBtJJPiuXQj9MyoFSO7H6U7aOARw",
  authDomain: "finance-angular-8ef80.firebaseapp.com",
  projectId: "finance-angular-8ef80",
  storageBucket: "finance-angular-8ef80.appspot.com",
  messagingSenderId: "73934019639",
  appId: "1:73934019639:web:b5875eaaa4349124b4b3b2"
};

const app = initializeApp(environment);
export const auth = getAuth(app);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
