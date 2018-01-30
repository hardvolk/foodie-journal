import { Injectable } from '@angular/core';

import { users } from './mockusers';

@Injectable()
export class AuthService {

  constructor() { }

  getCurrentUser(): string {
    return localStorage.getItem('CurrentUser');
  }

  setCurrentUser(user: string): void {
      localStorage.setItem('CurrentUser', user);
  }

  logoutUser(): void {
    localStorage.setItem('CurrentUser', '');
  }

  verifyPassword(email: string, password: string): boolean {
    const userindex = users.findIndex(x => x.email === email);
    return password === users[userindex].password  ? true : false;
  }

}
