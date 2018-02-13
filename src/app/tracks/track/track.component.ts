import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { journeys } from '../../../shared/interfaces/journeys';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  @HostBinding('class.card') true;
  @Input() journey;

  constructor(private _userService: UserService) { }

  checkProgress(journeyname: string): number {
    return this._userService.checkProgress(journeys.findIndex(x => x.name === journeyname));
  }

  ngOnInit() {
  }

}
