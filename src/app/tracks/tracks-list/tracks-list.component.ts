// tslint:disable:max-line-length
import { Component, OnInit } from '@angular/core';
import { journeys } from '../../../shared/interfaces/journeys';
import { Journey } from '../../../shared/interfaces/journey';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks-list.component.html',
  styleUrls: ['./tracks-list.component.css']
})
export class TracksListComponent implements OnInit {

  journeylist: Journey[];

  constructor() { }

  ngOnInit() {
    this.journeylist = journeys;
  }

}
