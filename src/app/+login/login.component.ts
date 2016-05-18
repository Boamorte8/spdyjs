import { Component, OnInit } from '@angular/core';
import { NgForm }    from '@angular/common';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public af: AngularFire) {}

  login() {
    this.af.auth.login();
  }

  ngOnInit() {
  }

}
