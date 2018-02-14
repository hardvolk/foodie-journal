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

  it('should toggle the account login status', () => {
    component.showAccountLogin = false;
    component.toggleShowLogin();
    expect(component.showAccountLogin).toBe(true);
  });

  it('should update the account panel', ()  => {
    component.updateAccountPanel();
    expect(component.userName).toBe('exampleone');
  });

});

