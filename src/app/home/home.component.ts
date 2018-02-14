import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  scroll(el) {
    el.scrollIntoView(true, {behavior: 'smooth' });
    window.scrollBy(0, -40);
  }

  ngOnInit() {
  }

}
