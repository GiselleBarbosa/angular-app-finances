import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {


  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onLogin() {
    console.log("login");
    this.router.navigate(['transaction']);
  }


}
