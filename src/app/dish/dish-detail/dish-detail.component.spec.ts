import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DishDetailComponent } from './dish-detail.component';
import { NO_ERRORS_SCHEMA} from '@angular/core/';
import { SafePipe } from '../../../shared/pipes/safe.pipe';
import { ApiService } from '../../../shared/services/api.service';
import { UserService } from '../../../shared/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../../../shared/interfaces/user';

describe('DishDetailComponent', () => {
  let component: DishDetailComponent;
  let fixture: ComponentFixture<DishDetailComponent>;

  beforeEach(async(() => {
    const DishDetailComponentMock = {};
    const SafePipeMock = {};
    const ApiServiceMock = {};
    const UserServiceMock = jasmine.createSpyObj('UserService', ['LoggedUser']);
    UserServiceMock.LoggedUser.and.returnValue(new BehaviorSubject({name: 'exampleone', email: 'example1', password: 'example1', journeys: {
      0: [false, false, false, false, false, false, false, false, false, false],
      1: [false, false, false, false, false, false, false, false, false, false],
      2: [false, false, false, false, false, false, false, false, false, false],
      3: [false, false, false, false, false, false, false, false, false, false],
      4: [false, false, false, false, false, false, false, false, false, false]}}));
    const ActivatedRouteMock = {};
    const RouterMock = {};

    TestBed.configureTestingModule({
      declarations: [ DishDetailComponent, SafePipe ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: DishDetailComponent, useValue: DishDetailComponentMock},
        {provide: SafePipe, useValue: SafePipeMock },
        {provide: ApiService, useValue: ApiServiceMock },
        {provide: UserService, useValue: UserServiceMock },
        {provide: ActivatedRoute, useValue: ActivatedRouteMock },
        {provide: Router, useValue: RouterMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
