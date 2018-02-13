import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userLogged: boolean;
  showAccountLogin = false;
  userName: string;

  // Router used in template logic.
  // noinspection JSUnusedLocalSymbols
  constructor(private router: Router, private _userService: UserService) { }

  ngOnInit() {
    this.userLogged = this._userService.isAuthenticated();

    if (this.userLogged) {
      this._userService.checkInitialUser().subscribe(user => this.userName = user.name);
    }
  }

  toggleShowLogin() {
    this.showAccountLogin = !this.showAccountLogin;
  }

  updateAccountPanel() {
    this.showAccountLogin = false;
    this.userLogged = this._userService.isAuthenticated();
    if (this.userLogged) {
      this._userService.checkInitialUser().subscribe(user => this.userName = user.name);
    }
  }

}
