import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-box',
  templateUrl: './progress-box.component.html',
  styleUrls: ['./progress-box.component.css']
})
export class ProgressBoxComponent implements OnInit {

  @Input() public value: number;

  constructor() { }

  ngOnInit() {
  }

}
