import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logoUrl = 'assets/logo.png';

  constructor() { }

  ngOnInit(): void {
  }
}
