import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { emails } from './../interfaces/loginMock';
import { User } from '../interfaces/user';

@Injectable()
export class AuthService {
  LoggedUser = new ReplaySubject<User>();
  user: User;

  constructor() {}

  checkInitialUser() {
    if (!!localStorage.getItem('CurrentUser')) {
      this.user = JSON.parse(localStorage.getItem('CurrentUser'));
      if (this.user.IsLoggedIn === true) {
        this.login(JSON.parse(localStorage.getItem('CurrentUser')));
      } else {
        this.LoggedUser.next({name: '', email: '', password: '', IsLoggedIn: false }); }
    } else {
      this.LoggedUser.next({name: '', email: '', password: '', IsLoggedIn: false });
    }
  }

  login (user: User) {
    user.IsLoggedIn = true;
    this.LoggedUser.next(user);
    localStorage.setItem('CurrentUser', JSON.stringify(user));
  }

  logout (): void {
    this.LoggedUser.subscribe(user => (this.user = user));
    this.user.IsLoggedIn = false;
    this.LoggedUser.next(this.user);
    localStorage.setItem('CurrentUser', JSON.stringify(this.user));
    console.log('user logged out');
  }

}
