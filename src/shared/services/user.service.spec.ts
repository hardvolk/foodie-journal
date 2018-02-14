import { TestBed, inject } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA} from '@angular/core/';
import { UserService } from './user.service';

const MockUser = {
  name: 'exampleone', email: 'example1', password: 'example1', currentJourney: 'example' ,
  journeys: {
    0: [false, false, false, false, false, false, false, false, false, false],
    1: [false, false, false, false, false, false, false, false, false, false],
    2: [false, false, false, false, false, false, false, false, false, false],
    3: [false, false, false, false, false, false, false, false, false, false],
    4: [false, false, false, false, false, false, false, false, false, false]
  }
};

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
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

    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  describe('isAuthenticated', () => {
    it('should check LS and return true if a user is logged in', inject([UserService], (service: UserService) => {
      localStorage.setItem('CurrentUser', 'example');
      expect(service.isAuthenticated()).toBe(true);
    }));

    it('should check LS and return false if no user is logged in', inject([UserService], (service: UserService) => {
      expect(service.isAuthenticated()).toBe(false);
    }));
  });

  describe('checkInitialUser', () => {
    it('should check the stored user, if it exists then login that user',  inject([UserService], (service: UserService) => {
      localStorage.setItem('CurrentUser', 'example');
      localStorage.setItem('example', JSON.stringify('exampleuser'));
      spyOn(service, 'login');
      service.checkInitialUser();
      expect(service.login).toHaveBeenCalledWith('exampleuser');
    }));

    it('should check the stored user, if it does not exist then return an empty user',  inject([UserService], (service: UserService) => {
      service.LoggedUser.value.name = 'example';
      service.checkInitialUser();
      expect(service.LoggedUser.value.name).toBe('');
    }));
  });

  describe('login', () => {
    it('should check if the username is valid, if not return blank user', inject([UserService], (service: UserService) => {
      service.login({name: ''});
      expect(localStorage.getItem('CurrentUser')).toBeFalsy();
    }));

    it('should check if the username is valid and exists in LS, then load from LS', inject([UserService], (service: UserService) => {
      localStorage.setItem(MockUser.name, JSON.stringify(MockUser));
      service.login(MockUser);
      expect(service.LoggedUser.value.name).toBe('exampleone');
    }));

    it('should check if the username is valid and does not exist in LS, then save to LS', inject([UserService], (service: UserService) => {
      service.login(MockUser);
      expect(localStorage.getItem(MockUser.name)).toBeTruthy();
    }));
  });

  describe('logout', () => {
    it('should remove the CurrentUser from LS',  inject([UserService], (service: UserService) => {
      localStorage.setItem('CurrentUser', 'example');
      service.logout();
      expect(localStorage.getItem('CurrentUser')).toBeFalsy();
    }));
  });

  describe('updateProgress', () => {
    it('should toggle the progress of a dish and set the value on the subject',  inject([UserService], (service: UserService) => {
      service.login(MockUser);
      service.updateProgress(0, 0);
      expect(service.LoggedUser.value.journeys[0][0]).toBe(true);
    }));
  });

  describe('setCurrentJourney', () => {
    it('should set the user currentjourney to the parameter',  inject([UserService], (service: UserService) => {
      service.setCurrentJourney('American');
      expect(service.LoggedUser.value.currentJourney).toBe('American');
    }));
  });

  describe('setCurrentJourney', () => {
    it('should set the user currentjourney to the parameter',  inject([UserService], (service: UserService) => {
      service.setCurrentJourney('American');
      expect(service.LoggedUser.value.currentJourney).toBe('American');
    }));
  });

  describe('checkProgress', () => {
    it('should return the number of completed dishes in the journey',  inject([UserService], (service: UserService) => {
      service.login(MockUser);
      service.LoggedUser.value.journeys[0] = [true, true, true, false, false, false, false, false, false, false];
      service.LoggedUser.value.journeys[1] = [true, true, true, true, true, false, false, false, false, false];
      expect(service.checkProgress(0)).toBe(3);
      expect(service.checkProgress(1)).toBe(5);
    }));
  });
});
