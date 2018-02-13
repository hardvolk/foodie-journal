import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
<<<<<<< HEAD
=======
import { Router, NavigationEnd } from '@angular/router';
>>>>>>> 846593ee6f7b66332e9f926fce8d532bad43c98e

@Component({
  selector: 'app-home-main-menu',
  templateUrl: './home-main-menu.component.html',
  styleUrls: ['./home-main-menu.component.css']
})

export class HomeMainMenuComponent implements OnInit {

  constructor(private _userService: UserService, private _router: Router) { }
  userLogged: boolean = this._userService.isAuthenticated();
  showAccountLogin = false;
  userName: string;

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

  ngOnInit() {
    if (this.userLogged) {
      this._userService.checkInitialUser().subscribe(user => this.userName = user.name);
    }
    this._router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
  });
  }
}
