import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { users } from '../../shared/interfaces/mockusers';
import { User } from '../../shared/interfaces/user';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  user: User;
  isLoggedIn: boolean = this._userService.isAuthenticated();
  @Output() loginSuccess: EventEmitter<any> = new EventEmitter();
  @Output() logoutSuccess: EventEmitter<any> = new EventEmitter();

  constructor(private _userService: UserService, private _router: Router) { }


  verifyPassword(query: string, pwd: string): boolean {
    if (users.find(x => x.email === query || x.name === query)) {
      return pwd === users.find(x => x.email === query || x.name === query).password;
    } else {
      return false;
    }
  }

  loginUser(query: string, pwd: string): boolean {
    if (this.verifyPassword(query, pwd)) {
      this._userService.login(users.find(x => x.email === query || x.name === query));
      this.isLoggedIn = true;
      this.loginSuccess.emit(null);
      this._router.navigate(['tracks']);
      return true;
    } else {
      return false;
    }
  }

  logoutUser(): void {
    this._userService.logout();
    this.logoutSuccess.emit(null);
    this._router.navigate(['home']);
  }

  ngOnInit() {
    this._userService.checkInitialUser().subscribe(user => this.user = user);
  }
}
