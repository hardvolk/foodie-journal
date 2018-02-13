import { of } from 'rxjs/observable/of';

export class MockApiService {
    CurrentRestaurant = {id: 'MockRestaurant'};
    CurrentReview = {id: 'MockReview'};

    constructor () {}

    getRestaurantInfo(id: string) {
        return of(this.CurrentRestaurant);
    }

    getRestaurantReview(id: string) {
        return of(this.CurrentRestaurant);
    }
}
