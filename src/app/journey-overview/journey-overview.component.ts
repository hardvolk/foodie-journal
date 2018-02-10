import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { journeys as JourneyDS, journeys } from '../../shared/interfaces/journeys';
import { ApiService } from '../../shared/services/api.service';
import { Restaurant } from '../../shared/interfaces/restaurant';
import { users } from '../../shared/interfaces/mockusers';
import { User } from '../../shared/interfaces/user';
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
  res: Restaurant[];
  // rest: Restaurant;
  journeyInput: String;
  dish: number;
  user: User = this._userService.LoggedUser.value;

  // getDishDetail(journey: String, dish: number) {
  //   this._apiService.getRestaurantInfo(journeys.find(x => x.name === journey).dishrest[dish]).subscribe(x => {
  //     this.res[dish] = x as Restaurant;
  //    });
  // }

  // getDishDetail2(journey: number, dish: number) {
  //   this._apiService.getRestaurantInfo(journeys[journey].dishrest[dish]).subscribe(x => {
  //     this.rest = x as Restaurant;
  //    });
  // }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.journeyParams = params;
      this.journey = JourneyDS.find( j => j.name === params.trackId);
      console.log('Current Journey: ', this.journey);
    });
  }
}
