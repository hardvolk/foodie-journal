import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { emails } from './../interfaces/loginMock';
import { User } from '../interfaces/user';

@Injectable()
export class UserService {
  LoggedUser = new ReplaySubject<User>();
  user: User;

  constructor() {}

  checkInitialUser() {
    if (!!localStorage.getItem('CurrentUser')) {
      this.login(JSON.parse(localStorage.getItem(localStorage.getItem('CurrentUser'))));
      } else { this.LoggedUser.next({name: '', email: '', password: ''}); }
  }

  login (user: User) {
    if (user.name.length > 0) {
      localStorage.setItem('CurrentUser', user.name);
      if (!!localStorage.getItem(user.name)) {
        this.user = JSON.parse(localStorage.getItem(user.name));
      } else {
        localStorage.setItem(user.name, JSON.stringify(user));
      }
      console.log('User ' + this.user.name + ' has logged in.');
    }
    this.LoggedUser.next(this.user);
  }

  logout (): void {
    localStorage.removeItem('CurrentUser');
    console.log('User has logged out.');
  }

  updateProgress (journeyid: number, dishid: number): void {
    this.LoggedUser.subscribe(user => (this.user = user));
    this.user['journey' + journeyid][dishid - 1] = !this.user['journey' + journeyid][dishid - 1];
    this.LoggedUser.next(this.user);
    localStorage.setItem(this.user.name, JSON.stringify(this.user));
    console.log('Changed journey ' + journeyid + ' , dish ' + dishid + ' to value: ' + this.user['journey' + journeyid][dishid - 1]);
  }

}
