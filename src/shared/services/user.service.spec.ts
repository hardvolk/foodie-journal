import { TestBed, inject } from '@angular/core/testing';
<<<<<<< HEAD
import { NO_ERRORS_SCHEMA} from '@angular/core/';
=======
>>>>>>> c9a21e8e2730e494b32db5c5d822af5dc72d3c50
import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
