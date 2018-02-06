import { Component, Input, OnInit } from '@angular/core';

/**
 * This component is used to create a container with a progress bar as a background, full width/height.
 * Note that this is not the same as putting content inside the ngx-progressbar,
 * since it will put the content inside the progressed area and not across the entire bar.
 */

@Component({
  selector: 'app-progress-box',
  templateUrl: './progress-box.component.html',
  styleUrls: ['./progress-box.component.css']
})
export class ProgressBoxComponent implements OnInit {

  // Basically we wrap the API of the progress bar component in ngx-bootstrap.
  @Input() public animate:  boolean;
  @Input() public max:      number;
  @Input() public striped:  boolean;
  @Input() public type:     string;
  @Input() public value:    number | any[];

  constructor() {
    this.animate = false;
    this.max     = 100;
    this.striped = false;
    this.type    = undefined;
    this.value   = undefined;
  }

  ngOnInit() {
  }

}
