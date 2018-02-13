import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA} from '@angular/core/';
import { TrackComponent } from './track.component';
import { UserService } from '../../../shared/services/user.service';
import { journeys } from '../../../shared/interfaces/journeys';
import { ActivatedRoute } from '@angular/router/';
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('TrackComponent', () => {
  let component: TrackComponent;
  let fixture: ComponentFixture<TrackComponent>;

  beforeEach(async(() => {
    const TrackComponentMock = {};
    const UserServiceMock = {};
    const RouterMock = {};

    TestBed.configureTestingModule({
      imports: [
      RouterTestingModule.withRoutes([{path: 'tracks/:trackId/:dishId', component: TrackComponent}])
      ],
      declarations: [ TrackComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: TrackComponent, useValue: TrackComponentMock},
        {provide: UserService, useValue: UserServiceMock }
      ]
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
