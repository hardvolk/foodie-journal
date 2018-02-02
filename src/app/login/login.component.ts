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

  user: User;

  constructor(private _userService: UserService) { }

  verifyPassword(query: string, pwd: string): boolean {
    if (users.find(x => x.email === query || x.name === query)) {
      console.log('user found');
      return pwd === users.find(x => x.email === query || x.name === query).password;
    } else { console.log('user not found'); return false; }
  }

  loginUser(query: string, pwd: string): boolean {
    if (this.verifyPassword(query, pwd)) {
      console.log('password verified');
      this._userService.login(users.find(x => x.email === query || x.name === query));
      return true;
    } else { console.log('failed to log in'); return false; }
  }

  logoutUser(): void {
    this._userService.logout();
  }

  ngOnInit() {
    this._userService.checkInitialUser().subscribe(user => this.user = user);
    this.user.name.length > 0 ? console.log('Currently logged in as: ' + this.user.name) : console.log('Currently not logged in.');
  }
}
