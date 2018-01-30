import { Component, OnInit } from '@angular/core';
import { users } from '../../shared/interfaces/mockusers';


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

  verifyPassword(email: string, password: string): boolean {
    const userindex = users.findIndex(x => x.email === email);
    return password === users[userindex].password  ? true : false;
  }

  logoutUser(): void {
    localStorage.setItem('CurrentUser', '');
  }

}
