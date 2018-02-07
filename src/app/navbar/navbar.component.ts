import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

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
