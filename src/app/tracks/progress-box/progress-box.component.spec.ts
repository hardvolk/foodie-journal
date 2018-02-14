import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA} from '@angular/core/';
import { ProgressBoxComponent } from './progress-box.component';

describe('ProgressBoxComponent', () => {
  let component: ProgressBoxComponent;
  let fixture: ComponentFixture<ProgressBoxComponent>;

  beforeEach(async(() => {
    const ProgressBoxComponentMock = {};

    TestBed.configureTestingModule({
      declarations: [ ProgressBoxComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
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
