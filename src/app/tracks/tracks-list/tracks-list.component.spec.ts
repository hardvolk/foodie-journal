import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TracksListComponent } from './tracks-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TracksListComponent', () => {
  let component: TracksListComponent;
  let fixture: ComponentFixture<TracksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TracksListComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TracksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
