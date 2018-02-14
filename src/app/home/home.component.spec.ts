import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    const HomeComponentMock = {};

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([{path: 'home', component: HomeComponent}])
      ],
      declarations: [
        HomeComponent
       ]
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

  it('should call the scroll function', () => {
    const el = document.createElement('div');
    spyOn(el, 'scrollIntoView');
    spyOn(window, 'scrollBy');
    component.scroll(el);
    expect(el.scrollIntoView).toHaveBeenCalled();
    expect(window.scrollBy).toHaveBeenCalledWith(0, -40);
  });

});
