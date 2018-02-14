import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { Restaurant } from '../interfaces/restaurant';
import { Review } from '../interfaces/review';

export class MockApiService {
    CurrentRestaurant = {
        id: 'example',
        name: 'example',
        image_url: 'example',
        phone: 'example',
        url: 'example',
        price: 'example',
        rating: 4.3,
        review_count: 0,
        categories: {title: 'example'},
        location: {displayaddress: ['example']},
        hours: {is_open_now: true},
        coordinates: {latitude: 0,
        longitude: 0},
        gmapsurl: 'example'};

    CurrentReview = {reviews: [{id: 'example', text: 'example', user: {image_url: 'example'}}]};

    constructor () {}

    getRestaurantInfo(id: string): Observable<Restaurant> {
        return of(this.CurrentRestaurant);
    }

    getRestaurantReview(id: string): Observable<Review> {
        return of(this.CurrentReview);
    }
}
