import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Restaurant } from '../interfaces/restaurant';
import { AsyncSubject} from 'rxjs/AsyncSubject';
import { finalize } from 'rxjs/operators/finalize';

@Injectable()
export class ApiService {

    rest: Restaurant;
    rev: Object;
    CurrentRestaurant = new AsyncSubject<Restaurant>();
    Review = new AsyncSubject<any>();
    // tslint:disable-next-line:max-line-length
    yelpheader = { headers: new HttpHeaders({ Authorization: 'Bearer lVKLoqjeYs5PhMd7VpdKoXriT650qjoNpL_rfNvIxzi1fds2vG_MuOPBZFP1AgZ4RiHeePGoAEfl9-duuWvx7ZPaAGhD2DienR7Z9FRCQHmyNySd5_oOBaBfLupxWnYx'})};
    yelpURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/';
    gmapsURL = 'https://www.google.com/maps/embed/v1/search?key=AIzaSyDEulyL6VtHbfKDtGnFxs6FM6FlkowMptM&zoom=14&center=';

    constructor (private http: HttpClient) {}

    getRestaurantInfo(id: string): AsyncSubject<Restaurant> {
      this.http.get(this.yelpURL + id, this.yelpheader)
        .pipe(finalize(() => { this.CurrentRestaurant.next(this.rest); this.CurrentRestaurant.complete(); }))
        .subscribe(x => {
          this.rest = x as Restaurant;
          this.rest.gmapsurl =  this.gmapsURL + this.rest.coordinates.latitude + ', '
          + this.rest.coordinates.longitude + '&q=' + this.rest.name;
        });
      return this.CurrentRestaurant;
    }

    getRestaurantReview(id: string): AsyncSubject<any> {
      this.http.get(this.yelpURL + id + '/reviews', this.yelpheader)
      .pipe(finalize(() => { this.Review.next(this.rev); this.Review.complete(); }))
      .subscribe(x => this.rev = x);
    return this.Review;
    }

    /* funcion ejemplo para llamar info del restaurante:

    sampleGet(id: string): Restaurant {
      this.getRestaurantInfo(id).subscribe( x => { this.rest = x as Restaurant; this.loading = false; });
    }

    */
}
