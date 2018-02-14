import { TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from './api.service';

const SampleRestaurant = {
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

describe('ApiService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [ApiService, HttpClient, HttpHandler]
    });
    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };

    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear').and.callFake(mockLocalStorage.clear);
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

  describe('getRestaurantInfo', () => {
    it('should get info from Local Storage if it exists', inject([ApiService], (service: ApiService) => {
      localStorage.setItem('example', JSON.stringify(SampleRestaurant));
      service.getRestaurantInfo('example');
      expect(localStorage.getItem).toHaveBeenCalledWith('example');
    }));

    /* it('should get info from API if does not exist in Local Storage',
      inject([ApiService, HttpClient, HttpClientTestingModule],
      (service: ApiService, http: HttpClient, backend: HttpClientTestingModule) => {
        service.getRestaurantInfo('example');

    })); */

  });

});
