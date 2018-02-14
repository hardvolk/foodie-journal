import { async, ComponentFixture, TestBed } from '@angular/core/testing';
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
import 'hammerjs';

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

  it('should return a Restaurant in rest.name', () => {
    const checkGetDish = component.getDishDetail(0, 0);
    expect(component.rest.name).toBe('example');
  });

});
