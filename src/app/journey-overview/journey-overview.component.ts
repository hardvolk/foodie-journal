import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journey-overview',
  templateUrl: './journey-overview.component.html',
  styleUrls: ['./journey-overview.component.css']
})
export class JourneyOverviewComponent implements OnInit {

  // Track
  track: any = {
    unitsCcompleted: 1,
    unitsTotal: 10,
    iconUrl: '/assets/icons/tracks/burger.png',
    title: 'American',
    description: 'One characteristic of American cooking is the fusion of multiple ethnic ' +
      'or regional approaches into completely new cooking styles.',
    duration: '3 weeks',
  };

  constructor() { }

  ngOnInit() {
  }

}
