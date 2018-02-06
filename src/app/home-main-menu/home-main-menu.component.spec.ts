import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMainMenuComponent } from './home-main-menu.component';

describe('HomeMainMenuComponent', () => {
  let component: HomeMainMenuComponent;
  let fixture: ComponentFixture<HomeMainMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMainMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
