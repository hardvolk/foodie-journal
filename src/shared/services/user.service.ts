import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { last } from 'rxjs/operators/last';
import { User } from '../interfaces/user';
import { map } from 'rxjs/operator/map';

@Injectable()
export class UserService {
  LoggedUser = new BehaviorSubject<User>({name: '', email: '', password: ''});
  user: User = {name: '', email: '', password: ''};

  constructor() {}

  isAuthenticated(): boolean {
    return localStorage.getItem('CurrentUser') !== null;
  }

  checkInitialUser(): BehaviorSubject<User> {
    if (!!localStorage.getItem('CurrentUser')) {
      this.login(JSON.parse(localStorage.getItem(localStorage.getItem('CurrentUser'))));
      } else { this.LoggedUser.next({name: '', email: '', password: ''}); }
    return this.LoggedUser;
  }

  login (user: User) {
    if (user.name.length > 0) {
      localStorage.setItem('CurrentUser', user.name);
      localStorage.setItem(user.name, JSON.stringify(user));
      this.user = user;
    }
    this.LoggedUser.next(this.user);
  }

  logout (): void {
    localStorage.removeItem(this.user.name); // We need to delete the user info from localStorage
    localStorage.removeItem('CurrentUser');
  }

  updateProgress (journeyid: number, dishid: number): void {
    this.LoggedUser.pipe(last()).subscribe(user => (this.user = user));
    this.user['journey' + journeyid][dishid - 1] = !this.user['journey' + journeyid][dishid - 1];
    this.LoggedUser.next(this.user);
    localStorage.setItem(this.user.name, JSON.stringify(this.user));
    console.log('Changed journey ' + journeyid + ' , dish ' + dishid + ' to value: ' + this.user['journey' + journeyid][dishid - 1]);
  }

  checkProgress (journeyid: number): number {
    return this.LoggedUser.value['journey' + journeyid].filter( x => x === true).length;
  }

}
