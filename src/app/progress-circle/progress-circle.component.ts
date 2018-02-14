import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.css']
})
export class ProgressCircleComponent implements OnInit, OnChanges {

  @Input() bgColor: string;
  @Input() coverColor: string;
  @Input() progress: number;
  @Input() iconUrl: string;
  private rotation: number;
  private progressColor: string;

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnChanges() {
    this.setStyleValues();
  }

  ngOnInit() {
    this.setStyleValues();
  }

  setStyleValues(): void {
    this.rotation = this.progress <= 50 ? 180 / 50 * this.progress : 180 / 50 * (this.progress - 50);
    this.progressColor = this.progress <= 50 ? this.bgColor : this.coverColor;
  }

}
