import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { emails } from './../interfaces/loginMock';

import { users } from './mockusers';


@Injectable()
export class AuthService {

  constructor() { }

  checkEmail(email: string): Observable<boolean>  {
  const Avaliable = emails.filter( user => user.email === email).length === 0;
  return Observable.of(Avaliable).delay(1600);
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

