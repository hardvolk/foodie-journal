import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { users } from '../../shared/interfaces/mockusers';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor() { }

  getCurrentUser(): string {
    return localStorage.getItem('CurrentUser');
  }

  setCurrentUser(user: string): void {
    localStorage.setItem('CurrentUser', user);
  }

  verifyPassword(email: string, pwd: string): boolean {
    if (users.find(x => x.email === email)) {
      const password = users.find(x => x.email === email).password;
      console.log('user: ' + email);
      console.log('pwd: ' + pwd);
      console.log(pwd === password);
      return pwd === password  ? true : false;
    } else {
      console.log('undefined');
      return false;
    }
  }

  logoutUser(): void {
    localStorage.setItem('CurrentUser', '');
  }

  ngOnInit() {
  }
}
