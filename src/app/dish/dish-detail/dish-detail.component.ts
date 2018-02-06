import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { ApiService} from '../../../shared/services/api.service';
import { Restaurant } from '../../../shared/interfaces/restaurant';
import { journeys } from '../../../shared/interfaces/journeys';
import { users } from '../../../shared/interfaces/mockusers';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {

  rest: Restaurant;
  loading = true;

  constructor(private _apiService: ApiService) { }

  getDishDetail(journey: number, dish: number) {
    this._apiService.getRestaurantInfo(journeys[journey].dishrest[dish]).subscribe(x => {
      this.rest = x as Restaurant;
      this.loading = false; });
  }

  ngOnInit() {
    this.getDishDetail(0, 0);
  }

}
