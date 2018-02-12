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
    // tslint:disable-next-line:max-line-length
    yelpheader = { headers: new HttpHeaders({ Authorization: 'Bearer lVKLoqjeYs5PhMd7VpdKoXriT650qjoNpL_rfNvIxzi1fds2vG_MuOPBZFP1AgZ4RiHeePGoAEfl9-duuWvx7ZPaAGhD2DienR7Z9FRCQHmyNySd5_oOBaBfLupxWnYx'})};
    yelpURL = 'https://fj-cors.herokuapp.com/https://api.yelp.com/v3/businesses/';
    gmapsURL = 'https://www.google.com/maps/embed/v1/search?key=AIzaSyDEulyL6VtHbfKDtGnFxs6FM6FlkowMptM&zoom=14&center=';

    constructor (private http: HttpClient) {}

    getRestaurantInfo(id: string): AsyncSubject<Restaurant> {
      const CurrentRestaurant = new AsyncSubject<Restaurant>();
      if (!!localStorage.getItem(id)) {
          this.rest = JSON.parse(localStorage.getItem(id));
          CurrentRestaurant.next(this.rest);
          CurrentRestaurant.complete();
        } else {
          this.http.get(this.yelpURL + id, this.yelpheader)
            .pipe(finalize(() => {
              localStorage.setItem(id, JSON.stringify(this.rest));
              CurrentRestaurant.next(this.rest);
              CurrentRestaurant.complete(); }))
            .subscribe(x => {
              this.rest = x as Restaurant;
              this.rest.gmapsurl =  this.gmapsURL + this.rest.coordinates.latitude + ', '
              + this.rest.coordinates.longitude + '&q=' + this.rest.name;
            });
        }
      return CurrentRestaurant;
    }

    getRestaurantReview(id: string): AsyncSubject<any> {
      const CurrentReview = new AsyncSubject<Review>();
      if (!!localStorage.getItem(id + 'review')) {
        this.rev = JSON.parse(localStorage.getItem(id + 'review'));
        CurrentReview.next(this.rev);
        CurrentReview.complete();
      } else {
        this.http.get(this.yelpURL + id + '/reviews', this.yelpheader)
        .pipe(finalize(() => {
          localStorage.setItem(id + 'review', JSON.stringify(this.rev));
          CurrentReview.next(this.rev);
          CurrentReview.complete(); }))
        .subscribe(x => this.rev = x);
      }
    return CurrentReview;
    }

    /* funcion ejemplo para llamar info del restaurante:

    sampleGet(id: string): Restaurant {
      this.getRestaurantInfo(id).subscribe( x => { this.rest = x as Restaurant; this.loading = false; });
    }

    */
}
