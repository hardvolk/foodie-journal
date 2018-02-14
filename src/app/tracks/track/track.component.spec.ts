import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA} from '@angular/core/';
import { TrackComponent } from './track.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MockUserService } from '../../../shared/services/mock.user.service';
import { UserService } from '../../../shared/services/user.service';

describe('TrackComponent', () => {
  let component: TrackComponent;
  let fixture: ComponentFixture<TrackComponent>;

  beforeEach(async(() => {
    const TrackComponentMock = {};
    const UserServiceMock = {};
    const RouterMock = {};

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([{path: './', component: TrackComponent}])
      ],
      declarations: [ TrackComponent ],
      providers: [{ provide: UserService, useClass: MockUserService}],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Progress tests', () => {
    it('should return a progress number', () => {
      const checkCheckProgress = component.checkProgress('American');
      expect(checkCheckProgress).toBe(1);
    });
  });
});
