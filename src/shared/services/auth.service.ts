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

  verifyPassword(email: string, password:string): boolean {
      let userindex = users.findIndex(x => x.email === email);
      return password === users[userindex].password  ? true : false;
    }

  logoutUser(): void {
      localStorage.setItem('CurrentUser', '');
    }

}
