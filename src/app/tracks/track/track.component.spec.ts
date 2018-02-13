import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA} from '@angular/core/';
import { TrackComponent } from './track.component';
<<<<<<< HEAD
import { UserService } from '../../../shared/services/user.service';
import { journeys } from '../../../shared/interfaces/journeys';
import { ActivatedRoute } from '@angular/router/';
import { RouterTestingModule } from '@angular/router/testing';
=======
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MockUserService } from '../../../shared/services/mock.user.service';
import { UserService } from '../../../shared/services/user.service';
>>>>>>> af3b9309ef8c6d1b426cae8ff335123b04abe068

fdescribe('TrackComponent', () => {
  let component: TrackComponent;
  let fixture: ComponentFixture<TrackComponent>;

  beforeEach(async(() => {
    const TrackComponentMock = {};
    const UserServiceMock = {};
    const RouterMock = {};

    TestBed.configureTestingModule({
      imports: [
<<<<<<< HEAD
      RouterTestingModule.withRoutes([{path: 'tracks/:trackId/:dishId', component: TrackComponent}])
      ],
      declarations: [ TrackComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: TrackComponent, useValue: TrackComponentMock},
        {provide: UserService, useValue: UserServiceMock }
      ]
=======
        RouterTestingModule.withRoutes([{path: './', component: TrackComponent}])
      ],
      declarations: [ TrackComponent ],
      providers: [{ provide: UserService, useClass: MockUserService}],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
>>>>>>> af3b9309ef8c6d1b426cae8ff335123b04abe068
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
});
