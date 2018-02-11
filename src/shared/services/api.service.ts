import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Restaurant } from '../interfaces/restaurant';
import { AsyncSubject} from 'rxjs/AsyncSubject';
import { finalize } from 'rxjs/operators/finalize';
import { Review } from '../interfaces/review';

@Injectable()
export class ApiService {

    rest: Restaurant;
    rev: Object;
    CurrentRestaurant = new AsyncSubject<Restaurant>();
    Review = new AsyncSubject<Review>();
    // tslint:disable-next-line:max-line-length
    yelpheader = { headers: new HttpHeaders({ Authorization: 'Bearer lVKLoqjeYs5PhMd7VpdKoXriT650qjoNpL_rfNvIxzi1fds2vG_MuOPBZFP1AgZ4RiHeePGoAEfl9-duuWvx7ZPaAGhD2DienR7Z9FRCQHmyNySd5_oOBaBfLupxWnYx'})};
    yelpURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/';
    gmapsURL = 'https://www.google.com/maps/embed/v1/search?key=AIzaSyDEulyL6VtHbfKDtGnFxs6FM6FlkowMptM&zoom=14&center=';

    constructor (private http: HttpClient) {}

    getRestaurantInfo(id: string): AsyncSubject<Restaurant> {
      if (!!localStorage.getItem(id)) {
          this.rest = JSON.parse(localStorage.getItem(id));
          this.CurrentRestaurant.next(this.rest);
          this.CurrentRestaurant.complete();
        } else {
          this.http.get(this.yelpURL + id, this.yelpheader)
            .pipe(finalize(() => {
              localStorage.setItem(id, JSON.stringify(this.rest));
              this.CurrentRestaurant.next(this.rest);
              this.CurrentRestaurant.complete(); }))
            .subscribe(x => {
              this.rest = x as Restaurant;
              this.rest.gmapsurl =  this.gmapsURL + this.rest.coordinates.latitude + ', '
              + this.rest.coordinates.longitude + '&q=' + this.rest.name;
            });
        }
      return this.CurrentRestaurant;
    }

    getRestaurantReview(id: string): AsyncSubject<any> {
      if (!!localStorage.getItem(id + 'review')) {
        this.rev = JSON.parse(localStorage.getItem(id + 'review'));
        this.Review.next(this.rev);
        this.Review.complete();
      } else {
        this.http.get(this.yelpURL + id + '/reviews', this.yelpheader)
        .pipe(finalize(() => {
          localStorage.setItem(id + 'review', JSON.stringify(this.rev));
          this.Review.next(this.rev);
          this.Review.complete(); }))
        .subscribe(x => this.rev = x);
      }
    return this.Review;
    }

    /* funcion ejemplo para llamar info del restaurante:

    sampleGet(id: string): Restaurant {
      this.getRestaurantInfo(id).subscribe( x => { this.rest = x as Restaurant; this.loading = false; });
    }

    */
}
