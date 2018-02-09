// tslint:disable:max-line-length
import { Component, OnInit } from '@angular/core';
import { journeys } from '../../../shared/interfaces/journeys';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks-list.component.html',
  styleUrls: ['./tracks-list.component.css']
})
export class TracksListComponent implements OnInit {

  journeylist = journeys;

  constructor() { }

  ngOnInit() {
  }

}
