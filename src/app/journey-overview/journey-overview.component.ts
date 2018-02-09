import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { journeys as JourneyDS, journeys } from '../../shared/interfaces/journeys';
import { ApiService } from '../../shared/services/api.service';
import { Restaurant } from '../../shared/interfaces/restaurant';

@Component({
  selector: 'app-journey-overview',
  templateUrl: './journey-overview.component.html',
  styleUrls: ['./journey-overview.component.css']
})
export class JourneyOverviewComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute, private _apiService: ApiService) { }
  journeyParams: any;
  journey: any;
  res: Restaurant[];
  loading = true;
  journeyInput: String;
  dish: number;

  getDishDetail(journey: String, dish: number) {
    this._apiService.getRestaurantInfo(journeys.find(x => x.name === journey).dishrest[dish]).subscribe(x => {
      this.res[dish] = x as Restaurant;
     });
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.journeyParams = params;
      this.journey = JourneyDS.find( j => j.name === params.trackId);
      console.log('Current Journey: ', this.journey);
    });
  }
}

