import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { journeys as JourneyDS } from '../../shared/interfaces/journeys';

@Component({
  selector: 'app-journey-overview',
  templateUrl: './journey-overview.component.html',
  styleUrls: ['./journey-overview.component.css']
})
export class JourneyOverviewComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute) { }
  journeyParams: any;
  journey: any;

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.journeyParams = params;
      this.journey = JourneyDS.find( j => j.name === params.trackId);
      console.log('Current Journey: ', this.journey);
    });
  }

}
