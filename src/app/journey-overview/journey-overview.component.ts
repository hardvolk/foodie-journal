import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { journeys as JourneyDS, journeys } from '../../shared/interfaces/journeys';
import { ApiService } from '../../shared/services/api.service';
import { Restaurant } from '../../shared/interfaces/restaurant';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/interfaces/user';

@Component({
  selector: 'app-journey-overview',
  templateUrl: './journey-overview.component.html',
  styleUrls: ['./journey-overview.component.css']
})
export class JourneyOverviewComponent implements OnInit {

  journey: any;
  res: Restaurant[] = new Array<Restaurant>();
  viajes = journeys;
  loading: boolean[] = [false, false, false, false, false, false, false, false, false, false];
  journeyId: number;
  journeycompleted = false;
  user: User = this._userService.LoggedUser.value;
  progress: number;

  constructor(private _activatedRoute: ActivatedRoute, private _apiService: ApiService, private _userService: UserService) { }

  getDishDetail(journey: String, dish: number) {
      this.loading[dish] = false;
      this._apiService.getRestaurantInfo(journeys.find(x => x.name === journey).dishrest[dish]).subscribe(x => {
      this.res[dish] = x as Restaurant;
      this.loading[dish] = true;
     });
    }

  getYelpStars(dish: number): string {
    return '/assets/images/yelp-stars/' + String(Math.round(this.res[dish].rating * 2) / 2) + '.png';
    }

  setCurrentJourney(journey: string) {
    this._userService.setCurrentJourney(journey);
    this.user = this._userService.LoggedUser.value;
  }

  checkProgress(journeyname: string): number {
    return this._userService.checkProgress(journeys.findIndex(x => x.name === journeyname));
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.journeyId = JourneyDS.findIndex( j => j.name === params.trackId);
      this.journey = JourneyDS[this.journeyId];
      this.progress = this._userService.checkProgress(this.journeyId) * 10;
    });
  }
}
