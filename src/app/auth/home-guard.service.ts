import { UserService } from '../../shared/services/user.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class HomeGuardService implements CanActivate {
  constructor(public userService: UserService, public router: Router) {}
  // Always return true, but if user is loggedin will redirect to Tracks
  canActivate(): boolean {
    if (this.userService.isAuthenticated()) {
        this.router.navigate(['tracks']);
        return true;
    }
    return true;
  }
}
