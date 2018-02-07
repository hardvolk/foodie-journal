import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // Router used in template logic.
  // noinspection JSUnusedLocalSymbols
  constructor(private router: Router) { }

  show = false;
  showHamburguer = false;

  toggleShowLogin() {
    this.show = !this.show;
  }

  toggleShowHamburguer() {
    if (!!localStorage.getItem('CurrentUser')) {
      this.showHamburguer = true;
    }
  }

  ngOnInit() {
    this.toggleShowHamburguer();
  }

}
