import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA} from '@angular/core/';
import { JourneyOverviewComponent } from './journey-overview.component';

describe('JourneyOverviewComponent', () => {
  let component: JourneyOverviewComponent;
  let fixture: ComponentFixture<JourneyOverviewComponent>;

  beforeEach(async(() => {
    const JourneyOverviewComponentMock = {};

    TestBed.configureTestingModule({
      declarations: [ JourneyOverviewComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: JourneyOverviewComponent, useValue: JourneyOverviewComponentMock}
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
});
