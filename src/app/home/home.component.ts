// import { FlashMessagesService } from 'angular2-flash-messages';
import { AngularFire } from 'angularfire2';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public _af:AngularFire,
    // public _flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
  }

  login(){
    this._af.auth.login();
  }

}

