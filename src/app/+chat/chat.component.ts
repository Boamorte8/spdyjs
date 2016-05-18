import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.css']
})
export class ChatComponent implements OnInit {

  messages: FirebaseListObservable<any[]>;
  email:string;

  constructor(public af: AngularFire) {
    this.messages = af.database.list('/messages');
    this.af.auth.subscribe(auth => {
      this.email = auth.github.email;
    });
  }

  add(newMsg: string) {
    this.messages.push({
      email: this.email,
      text: newMsg
    });
  }

  ngOnInit() {
  }

}
