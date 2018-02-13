import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA} from '@angular/core/';
import { TracksListComponent } from './tracks-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TracksListComponent', () => {
  let component: TracksListComponent;
  let fixture: ComponentFixture<TracksListComponent>;

  beforeEach(async(() => {
    const TracksListComponentMock = {};

    TestBed.configureTestingModule({
      declarations: [ TracksListComponent ],
<<<<<<< HEAD
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: TracksListComponent, useValue: TracksListComponentMock}
      ]
=======
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
>>>>>>> af3b9309ef8c6d1b426cae8ff335123b04abe068
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
