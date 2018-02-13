import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService} from '../../../shared/services/api.service';
import { UserService } from '../../../shared/services/user.service';
import { Restaurant } from '../../../shared/interfaces/restaurant';
import { journeys } from '../../../shared/interfaces/journeys';
import { users } from '../../../shared/interfaces/mockusers';
import { User } from '../../../shared/interfaces/user';
import { Review } from '../../../shared/interfaces/review';
import { SafePipe } from '../../../shared/pipes/safe.pipe';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {

  trackId: number;
  dishId: number;
  journeylist = journeys;
  rest: Restaurant;
  review: Review;
  loading = true;
  loadingreview = true;
  user: User = this._userService.LoggedUser.value;
  dishstatus = false;

  constructor(private _apiService: ApiService, private _userService: UserService,
    private _activatedRoute: ActivatedRoute, private _router: Router) { }

  getDishDetail(journey: number, dish: number) {
    this._apiService.getRestaurantInfo(journeys[journey].dishrest[dish]).subscribe(x => {
      this.rest = x as Restaurant;
      this.loading = false; });
  }

  getReview(journey: number, dish: number) {
    const obs2 = this._apiService.getRestaurantReview(journeys[journey].dishrest[dish]).subscribe( x => {
      this.review = x as Review;
      if (this.review.reviews[0] !== undefined) { this.loadingreview = false; }
    });
  }

  getYelpStars(): string {
    return '/assets/images/yelp-stars/' + String(Math.round(this.rest.rating * 2) / 2) + '.png';
  }

  checkDishStatus(journey: number, dish: number) {
    this._userService.LoggedUser.subscribe(x => this.dishstatus = x.journeys[journey][dish]);
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.trackId = journeys.findIndex(x => x.name === params.trackId);
      this.dishId = journeys[this.trackId].dish.findIndex(x => x === params.dishId);
      if (this.trackId === -1 || this.dishId === -1 ) { this._router.navigateByUrl('/tracks'); return; }
      this.getDishDetail(this.trackId, this.dishId);
      this.getReview(this.trackId, this.dishId);
      this.checkDishStatus(this.trackId, this.dishId);
    });
  }
}
