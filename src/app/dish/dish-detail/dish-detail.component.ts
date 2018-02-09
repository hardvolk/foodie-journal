import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { ApiService} from '../../../shared/services/api.service';
import { UserService } from '../../../shared/services/user.service';
import { Restaurant } from '../../../shared/interfaces/restaurant';
import { journeys } from '../../../shared/interfaces/journeys';
import { users } from '../../../shared/interfaces/mockusers';
import { User } from '../../../shared/interfaces/user';
import { Review } from '../../../shared/interfaces/review';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {

  rest: Restaurant;
  review: Review;
  loading = true;
  loadingreview = true;
  journeylist = journeys;
  user: User = this._userService.LoggedUser.value;

  constructor(private _apiService: ApiService, private _userService: UserService) { }

  getDishDetail(journey: number, dish: number) {
    this._apiService.getRestaurantInfo(journeys[journey].dishrest[dish]).subscribe(x => {
      this.rest = x as Restaurant;
      this.loading = false; });
  }

  getReview(journey: number, dish: number) {
    this._apiService.getRestaurantReview(journeys[journey].dishrest[dish]).subscribe( x => {
      this.review = x as Review;
      if (this.review.reviews[0] !== undefined) { this.loadingreview = false; }
    });
  }

  getYelpStars(): string {
    return '/assets/images/yelp-stars/' + String(Math.round(this.rest.rating * 2) / 2) + '.png';
  }

  ngOnInit() {
    this.getDishDetail(0, 0);
    this.getReview(0, 0);
  }

}
