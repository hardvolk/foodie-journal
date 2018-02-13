import { UserService } from '../../shared/services/user.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class HomeGuardService implements CanActivate {
  constructor(public userService: UserService, public router: Router) {}
  // Always returns true. If user has started a Journey redirects to that journey, otherwise
  // redirects to track screen
  canActivate(): boolean {
    if (this.userService.isAuthenticated()) {
      if (this.userService.user.currentJourney != null) {
        this.router.navigate(['tracks', this.userService.user.currentJourney]);
      } else {
        this.router.navigate(['tracks']);
      }

      return true;
    }
    return true;
  }
}
