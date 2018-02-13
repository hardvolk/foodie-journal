import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBoxComponent } from './progress-box.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ProgressBoxComponent', () => {
  let component: ProgressBoxComponent;
  let fixture: ComponentFixture<ProgressBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressBoxComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
