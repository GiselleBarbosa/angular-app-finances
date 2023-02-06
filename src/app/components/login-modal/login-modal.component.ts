import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  @Output() sendLogin = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendLoginEvent() {
    this.sendLogin.emit();
  }
}
