import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  @HostBinding('class.card') true;
  @Input() public track;

  constructor() { }

  ngOnInit() {
  }

}
