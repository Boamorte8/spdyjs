import { Component } from '@angular/core';
import { Router, Routes, ROUTER_DIRECTIVES} from '@angular/router';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { ChatComponent } from './+chat';

import { LoginComponent } from './+login';

@Component({
  moduleId: module.id,
  selector: 'spdyjs-app',
  templateUrl: 'spdyjs.component.html',
  styleUrls: ['spdyjs.component.css'],
  directives: [ROUTER_DIRECTIVES]
})

@Routes([
  {path: '/', component: LoginComponent},
  {path: '/chat', component: ChatComponent}
])

export class SpdyjsAppComponent {
  title = 'spdyjs works!';

  constructor(private router: Router, public af: AngularFire) {
    this.af.auth.subscribe(auth => {

      // interceptor
      if (auth) {
        if (auth.uid) {
          this.router.navigate(['/chat']);
        }
      } else {
        this.router.navigate(['/']);
      }

    });
  }

  logout() {
    this.af.auth.logout();
  }

}
