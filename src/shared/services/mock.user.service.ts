import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../interfaces/user';

const MockUser: User = {name: 'exampleone', email: 'example1', password: 'example1', currentJourney: 'example' , journeys: {
    0: [false, false, false, false, false, false, false, false, false, false],
    1: [false, false, false, false, false, false, false, false, false, false],
    2: [false, false, false, false, false, false, false, false, false, false],
    3: [false, false, false, false, false, false, false, false, false, false],
    4: [false, false, false, false, false, false, false, false, false, false]}};

export class MockUserService {
  LoggedUser = new BehaviorSubject<User>(MockUser);
  user: User = MockUser;

  isAuthenticated(): boolean {
    return true;
  }

  checkInitialUser(): BehaviorSubject<User> {
    return this.LoggedUser;
  }

  login (user: User) {}

  logout (): void {}

  updateProgress (journeyid: number, dishid: number): void {}

  setCurrentJourney(journeyName: string): void {}

  checkProgress (journey: number): number {
      return 1;
  }
}
