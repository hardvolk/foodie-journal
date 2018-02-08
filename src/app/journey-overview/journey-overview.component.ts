import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journey-overview',
  templateUrl: './journey-overview.component.html',
  styleUrls: ['./journey-overview.component.css']
})
export class JourneyOverviewComponent implements OnInit {
  customClass: string = 'customClass';
  isFirstOpen: boolean = true;
  
  constructor() { }

  ngOnInit() { }

}

// export class NgbdAccordionToggle {

// }
