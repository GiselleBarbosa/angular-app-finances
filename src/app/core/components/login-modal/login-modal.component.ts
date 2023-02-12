import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  @Output() sendLogin = new EventEmitter();

  constructor(
    private router: Router,
    public afAuth: AngularFireAuth
  ) { }

  ngOnInit(): void {
  }

  sendLoginEvent() {
    this.sendLogin.emit();
  }

  logout(): void {
    this.afAuth.signOut();
  }



}
