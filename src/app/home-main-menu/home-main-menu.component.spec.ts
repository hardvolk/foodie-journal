<<<<<<< HEAD
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA} from '@angular/core/';
import { HomeMainMenuComponent } from './home-main-menu.component';

describe('HomeMainMenuComponent', () => {
  let component: HomeMainMenuComponent;
  let fixture: ComponentFixture<HomeMainMenuComponent>;

  beforeEach(async(() => {
    const HomeMainMenuComponentMock = {};

    TestBed.configureTestingModule({
      declarations: [ HomeMainMenuComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: HomeMainMenuComponent, useValue: HomeMainMenuComponentMock},
      ]
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
=======
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgModel } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeMainMenuComponent } from './home-main-menu.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { MockUserService } from '../../shared/services/mock.user.service';

describe('HomeMainMenuComponent', () => {
  let component: HomeMainMenuComponent;
  let fixture: ComponentFixture<HomeMainMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ HomeMainMenuComponent, NgModel ],
      providers: [ {provide: UserService, useClass: MockUserService}],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
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
>>>>>>> af3b9309ef8c6d1b426cae8ff335123b04abe068
