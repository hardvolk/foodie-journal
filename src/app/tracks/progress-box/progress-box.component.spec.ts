import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBoxComponent } from './progress-box.component';

describe('ProgressBoxComponent', () => {
  let component: ProgressBoxComponent;
  let fixture: ComponentFixture<ProgressBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressBoxComponent ]
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
