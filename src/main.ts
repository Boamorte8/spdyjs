import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { SpdyjsAppComponent, environment } from './app/';
import { ROUTER_PROVIDERS } from '@angular/router';
import { FIREBASE_PROVIDERS,
  defaultFirebase,
  AngularFire,
  AuthMethods,
  AuthProviders,
  firebaseAuthConfig } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(SpdyjsAppComponent, [
  ROUTER_PROVIDERS,
  FIREBASE_PROVIDERS,
  defaultFirebase('https://spdyjs.firebaseio.com'),
  firebaseAuthConfig({
    provider: AuthProviders.Github,
    method: AuthMethods.Popup
  })
]);
