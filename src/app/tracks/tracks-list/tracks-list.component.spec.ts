import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA} from '@angular/core/';
import { TracksListComponent } from './tracks-list.component';

describe('TracksListComponent', () => {
  let component: TracksListComponent;
  let fixture: ComponentFixture<TracksListComponent>;

  beforeEach(async(() => {
    const TracksListComponentMock = {};

    TestBed.configureTestingModule({
      declarations: [ TracksListComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: TracksListComponent, useValue: TracksListComponentMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TracksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
