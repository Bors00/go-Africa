// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  amplify: {
    Auth: {
      /*identityPoolId: 'us-east-2:19aeb894-6aec-4f5c-a6d0-42db10ca9578',
      region: 'us-east-2',
      userPoolId: 'us-east-2_VOIoM02sq',*/
      identityPoolId: 'us-east-2:cfc01879-98d9-4214-a792-91914cf5f81f',
      region: 'us-east-2',
      userPoolId: 'us-east-2_HnbZRugwG'
    }
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
