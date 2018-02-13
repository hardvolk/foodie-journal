import { async, ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { NO_ERRORS_SCHEMA} from '@angular/core/';
=======
import { RouterTestingModule } from '@angular/router/testing';
>>>>>>> af3b9309ef8c6d1b426cae8ff335123b04abe068
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    const HomeComponentMock = {};

    TestBed.configureTestingModule({
<<<<<<< HEAD
      declarations: [ HomeComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: HomeComponent, useValue: HomeComponentMock}
      ]
=======
      imports: [
        RouterTestingModule.withRoutes([{path: 'home', component: HomeComponent}])
      ],
      declarations: [
        HomeComponent
       ]
>>>>>>> af3b9309ef8c6d1b426cae8ff335123b04abe068
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
