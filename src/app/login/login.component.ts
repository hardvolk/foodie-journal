import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { users } from '../../shared/interfaces/mockusers';
import { User } from '../../shared/interfaces/user';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username: string;
  password: string;
  user: User;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.checkInitialUser();
    this._userService.LoggedUser.subscribe(user => this.user = user);
    if (this.user.name.length > 0) {
      console.log('Currently logged in as: ' + this.user.name);
    } else {
      console.log('Currently not logged in.');
    }
  }

  verifyPassword(query: string, pwd: string): boolean {
    if (users.find(x => x.email === query || x.name === query)) {
      console.log('user found');
      return pwd === users.find(x => x.email === query || x.name === query).password;
    } else {
      console.log('user not found');
      return false;
    }
  }

  logoutUser(): void {
    this._userService.logout();
  }

  loginUser(query: string, pwd: string): boolean {
    if (this.verifyPassword(query, pwd)) {
      console.log('password verified');
      this._userService.login(users.find(x => x.email === query || x.name === query));
      return true;
    } else {
      console.log('failed to log in');
      return false;
    }
  }

  changeDish(journey: number, dish: number) {
    this._userService.updateProgress(journey, dish);
  }

}
