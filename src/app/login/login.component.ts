import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logoUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';

  constructor() { }

  ngOnInit(): void {
  }
}
