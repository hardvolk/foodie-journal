import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { last } from 'rxjs/operators/last';
import { User } from '../interfaces/user';
import { map } from 'rxjs/operator/map';
import { isUndefined } from 'util';

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
      if (!!localStorage.getItem(user.name)) {
        this.user = JSON.parse(localStorage.getItem(user.name));
      } else {
        localStorage.setItem(user.name, JSON.stringify(user));
        this.user = user;
      }
    }
    this.LoggedUser.next(this.user);
  }

  logout (): void {
    localStorage.removeItem('CurrentUser');
  }

  updateProgress (journeyid: number, dishid: number): void {
    this.LoggedUser.value.journeys[journeyid][dishid] = !this.LoggedUser.value.journeys[journeyid][dishid];
    localStorage.setItem(this.LoggedUser.value.name, JSON.stringify(this.LoggedUser.value));
    this.LoggedUser.next(this.LoggedUser.value);
  }

  setCurrentJourney(journeyName: string): void {
    this.LoggedUser.value.currentJourney = journeyName;
    localStorage.setItem(this.LoggedUser.value.name, JSON.stringify(this.LoggedUser.value));
    this.LoggedUser.next(this.LoggedUser.value);
  }

  checkProgress (journey: number): number {
    return this.LoggedUser.value.journeys[journey].filter(x => x === true).length;
  }

}
