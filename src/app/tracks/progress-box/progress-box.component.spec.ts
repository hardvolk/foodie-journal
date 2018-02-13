import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA} from '@angular/core/';
import { ProgressBoxComponent } from './progress-box.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ProgressBoxComponent', () => {
  let component: ProgressBoxComponent;
  let fixture: ComponentFixture<ProgressBoxComponent>;

  beforeEach(async(() => {
    const ProgressBoxComponentMock = {};

    TestBed.configureTestingModule({
      declarations: [ ProgressBoxComponent ],
<<<<<<< HEAD
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: ProgressBoxComponent, useValue: ProgressBoxComponentMock}
      ]
=======
      schemas: [ NO_ERRORS_SCHEMA ]
>>>>>>> af3b9309ef8c6d1b426cae8ff335123b04abe068
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
