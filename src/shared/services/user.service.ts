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
      this.LoggedUser.value.journeys[journeyid][dishid] = !this.LoggedUser.value.journeys[journeyid][dishid];
      localStorage.setItem(this.LoggedUser.value.name, JSON.stringify(this.LoggedUser.value));
      this.LoggedUser.next(this.LoggedUser.value);
      console.log('Changed ' + journeyid + ', ' + dishid + ' to value: ' + this.user.journeys[journeyid][dishid]); /* }); */
  }

  checkProgress (journeyid: number): number {
    return this.LoggedUser.value.journeys[journeyid].filter( x => x === true).length;
  }

}
