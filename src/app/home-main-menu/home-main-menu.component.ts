import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-main-menu',
  templateUrl: './home-main-menu.component.html',
  styleUrls: ['./home-main-menu.component.css']
})
export class HomeMainMenuComponent implements OnInit {

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
