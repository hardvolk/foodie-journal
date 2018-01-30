import { Injectable } from '@angular/core';

import { users } from './mockusers';


@Injectable()
export class AuthService {

  constructor() { }

  getCurrentUser():string {
    return localStorage.getItem('CurrentUser');
  }

  setCurrentUser(user:string): void {
      localStorage.setItem('CurrentUser', user);
    }

  verifyPassword(user: string, password:string): boolean {
      return password === 'password'  ? true : false;
    }

  logoutUser(): void {
      localStorage.setItem('CurrentUser', '');
    }

}
