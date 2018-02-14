import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA} from '@angular/core/';
import { ProgressCircleComponent } from './progress-circle.component';

describe('ProgressCircleComponent', () => {
  let component: ProgressCircleComponent;
  let fixture: ComponentFixture<ProgressCircleComponent>;

  beforeEach(async(() => {
    const ProgressCircleComponentMock = {};

    TestBed.configureTestingModule({
      declarations: [ ProgressCircleComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: ProgressCircleComponent, useValue: ProgressCircleComponentMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // describe('functions inside progress cirle', () => {
  //   it('', () => {
  //     const checkSetStyleValues = component.rotation;
  //     expect(component.setStyleValues).toHaveBeenCalled();
  //   });
  // });
});
