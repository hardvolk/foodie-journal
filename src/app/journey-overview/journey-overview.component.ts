import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { journeys as JourneyDS, journeys } from '../../shared/interfaces/journeys';
import { ApiService } from '../../shared/services/api.service';
import { Restaurant } from '../../shared/interfaces/restaurant';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-journey-overview',
  templateUrl: './journey-overview.component.html',
  styleUrls: ['./journey-overview.component.css']
})
export class JourneyOverviewComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute, private _apiService: ApiService, private _userService: UserService) { }
  journeyParams: any;
  journey: any;
  res: Restaurant[] = new Array<Restaurant>();
  rest: Restaurant;
  viajes = journeys;
  dish: number;
  loading: boolean[] = [false, false, false, false, false, false, false, false, false, false];

  getDishDetail(journey: String, dish: number) {
      this.loading[dish] = false;
      this._apiService.getRestaurantInfo(journeys.find(x => x.name === journey).dishrest[dish]).subscribe(x => {
      this.res[dish] = x as Restaurant;
      this.loading[dish] = true;
      console.log(this.res);
     });
    }

  getYelpStars(dish: number): string {
    return '/assets/images/yelp-stars/' + String(Math.round(this.res[dish].rating * 2) / 2) + '.png';
    }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.journeyParams = params;
      this.journey = JourneyDS.find( j => j.name === params.trackId);
      console.log('Current Journey: ', this.journey);
    });

  }
}
