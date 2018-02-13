import { async, ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { DishDetailComponent } from './dish-detail.component';
import { NO_ERRORS_SCHEMA} from '@angular/core/';
import { SafePipe } from '../../../shared/pipes/safe.pipe';
import { ApiService } from '../../../shared/services/api.service';
import { UserService } from '../../../shared/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../../../shared/interfaces/user';
=======
import { RouterTestingModule } from '@angular/router/testing';
import { DishDetailComponent } from './dish-detail.component';
import { SafePipe } from '../../../shared/pipes/safe.pipe';
import { MockUserService } from '../../../shared/services/mock.user.service';
import { UserService } from '../../../shared/services/user.service';
import { MockApiService } from '../../../shared/services/mock.api.service';
import { ApiService } from '../../../shared/services/api.service';
import { journeys } from '../../../shared/interfaces/journeys';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router/';
>>>>>>> c9a21e8e2730e494b32db5c5d822af5dc72d3c50

describe('DishDetailComponent', () => {
  let component: DishDetailComponent;
  let fixture: ComponentFixture<DishDetailComponent>;

  beforeEach(async(() => {
    const SafePipeMock = {};
    const ApiServiceMock = {};
    const UserServiceMock = {};
    const ActivatedRouteMock = {};
    const RouterMock = {};
    const DishDetailComponentMock = {};

    TestBed.configureTestingModule({
<<<<<<< HEAD
      declarations: [ DishDetailComponent, SafePipe ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: DishDetailComponent, useValue: DishDetailComponentMock},
        {provide: SafePipe, useValue: SafePipeMock },
        {provide: ApiService, useValue: ApiServiceMock },
        {provide: UserService, useValue: UserServiceMock },
        {provide: ActivatedRoute, useValue: ActivatedRouteMock },
        {provide: Router, useValue: RouterMock }
=======
      imports: [
        RouterTestingModule.withRoutes([{path: 'tracks/:trackId/:dishId', component: DishDetailComponent}]),
      ],
      declarations: [
        DishDetailComponent,
        SafePipe
      ],
      providers: [
        {provide: UserService, useClass: MockUserService},
        {provide: ApiService, useClass: MockApiService},
        {provide: ActivatedRoute, useValue: {
          params: of({trackId: 'American', dishId: 'Cheeseburger'}),
          snapshot: {}
        }},
        {provide: journeys, useValue: journeys}
>>>>>>> c9a21e8e2730e494b32db5c5d822af5dc72d3c50
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
