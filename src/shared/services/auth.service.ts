import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { emails } from './../interfaces/loginMock';

@Injectable()
export class AuthService {

  constructor() { }

<<<<<<< HEAD
  checkEmail(email: string): Observable<boolean>  {
  const Avaliable = emails.filter( user => user.email === email).length === 0;
  return Observable.of(Avaliable).delay(1600);
  }

=======
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

>>>>>>> 46ec53936a51fcebebf8b8eae9b6960e70f5d50c
}

