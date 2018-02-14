import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core/';
import { JourneyOverviewComponent } from './journey-overview.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from '../../shared/services/api.service';
import { MockApiService } from '../../shared/services/mock.api.service';
import { UserService } from '../../shared/services/user.service';
import { MockUserService } from '../../shared/services/mock.user.service';

describe('JourneyOverviewComponent', () => {
  let component: JourneyOverviewComponent;
  let fixture: ComponentFixture<JourneyOverviewComponent>;

  beforeEach(async(() => {
    const JourneyOverviewComponentMock = {};

    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ JourneyOverviewComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        {provide: ApiService, useClass: MockApiService},
        {provide: UserService, useClass: MockUserService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneyOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run Dish and give res a value Object', () => {
    const checkGetDish = component.getDishDetail('American', 1);
    expect(component.res[1].name).toBe('example');
  });

  it('should return stars from api mock', () => {
    component.getDishDetail('American', 0);
    const checkGetYelpStars = component.getYelpStars(0);
    expect(checkGetYelpStars).toBe('/assets/images/yelp-stars/' + String(4.5 + '.png'));
  });

  // it('should set the current journey of the app', () => {
  //   const checkSetCurrentJourney = component.setCurrentJourney('Japanese');
  //   expect(this.user).toBe(this.UserService.LoggedUser.value);
  // });

});
