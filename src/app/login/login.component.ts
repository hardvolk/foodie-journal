import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getCurrentUser(): string {
    return localStorage.getItem('CurrentUser');
  }

  setCurrentUser(user: string): void {
      localStorage.setItem('CurrentUser', user);
    }

  verifyPassword(user: string, password: string): boolean {
      return password === 'password'  ? true : false;
    }

  logoutUser(): void {
      localStorage.setItem('CurrentUser', '');
    }

}
