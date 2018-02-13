import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA} from '@angular/core/';
import { HomeMainMenuComponent } from './home-main-menu.component';

describe('HomeMainMenuComponent', () => {
  let component: HomeMainMenuComponent;
  let fixture: ComponentFixture<HomeMainMenuComponent>;

  beforeEach(async(() => {
    const HomeMainMenuComponentMock = {};

    TestBed.configureTestingModule({
      declarations: [ HomeMainMenuComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: HomeMainMenuComponent, useValue: HomeMainMenuComponentMock},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
