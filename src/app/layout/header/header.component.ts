import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  btnlogin: string = 'login';
  btnlogout: string = 'logout';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onlogout(): void {
    console.log('logout');
    this.router.navigate(['/']);
  }
}
