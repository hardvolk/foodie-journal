import { Component, OnInit, HostListener } from '@angular/core';
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
import { Journey } from '../../../shared/interfaces/journey';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {

  trackId: number;
  dishId: number;
  rest: Restaurant;
  review: Review;
  journeylist = journeys;
  loading = true;
  loadingreview = true;
  user: User = this._userService.LoggedUser.value;
  dishstatus = false;

  constructor(private _apiService: ApiService, private _userService: UserService,
    private _activatedRoute: ActivatedRoute, private _router: Router) { }

  getDishDetail(journey: number, dish: number) {
    this.loading = true;
    this._apiService.getRestaurantInfo(this.journeylist[journey].dishrest[dish]).subscribe(x => {
      this.rest = x as Restaurant;
      this.loading = false; });
  }

  getReview(journey: number, dish: number) {
    this.loadingreview = true;
    const obs2 = this._apiService.getRestaurantReview(this.journeylist[journey].dishrest[dish]).subscribe( x => {
      this.review = x as Review;
      if (this.review.reviews[0] !== undefined) { this.loadingreview = false; }
    });
  }

  getYelpStars(): string {
    return '/assets/images/yelp-stars/' + String(Math.round(this.rest.rating * 2) / 2) + '.png';
  }

  checkDishStatus() {
    this._userService.LoggedUser.subscribe(x => this.dishstatus = x.journeys[this.trackId][this.dishId]);
  }

  ngOnInit() {
    this.journeylist = journeys;
    this._activatedRoute.params.subscribe(params => {
      this.trackId = this.journeylist.findIndex(x => x.name === params.trackId);
      this.dishId = this.journeylist[this.trackId].dish.findIndex(x => x === params.dishId);
      if (this.trackId === -1 || this.dishId === -1 ) { this._router.navigateByUrl('/tracks'); return; }
      this.getDishDetail(this.trackId, this.dishId);
      this.getReview(this.trackId, this.dishId);
      this.checkDishStatus();
    });
  }

  setDishCompleted(): void {
    this._userService.updateProgress(this.trackId, this.dishId);
  }

  /* @HostListener('swipe',  ['$event'])
  onSwipe(event): void {
    if (this.dishstatus) {
      this.gotToNextDish();
    }
  }

  gotToNextDish(): void {
    const dishList = this.journeylist[this.trackId].dish;
    const isLastDish = dishList.length <= this.dishId + 1;
    console.log(dishList.length);
    if (isLastDish) {
      console.log(isLastDish);
      this._router.navigate(['../'], {relativeTo: this._activatedRoute});
    } else {
      console.log(isLastDish);
      const nextTrackId = dishList[this.dishId + 1];
      this._router.navigate(['../', nextTrackId], {relativeTo: this._activatedRoute});
    }
  }

}
 */
