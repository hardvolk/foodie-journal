import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  public tracks = [
    {
      unitsCcompleted: 1,
      unitsTotal: 10,
      iconUrl: 'foo',
      title: 'American',
      description: 'One characteristic of American cooking is the fusion of multiple ethnic or regional approaches into completely new cooking styles.',
      duration: '3 weeks',
    },
    {
      unitsCcompleted: 4,
      unitsTotal: 13,
      iconUrl: 'foo 2',
      title: 'Mexican',
      description: 'One characteristic of Mexican cooking is the fusion of multiple ethnic or regional approaches into completely new cooking styles.',
      duration: '4 weeks',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
