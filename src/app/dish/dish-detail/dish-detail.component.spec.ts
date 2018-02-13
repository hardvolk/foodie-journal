import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DishDetailComponent } from './dish-detail.component';
import { SafePipeMock } from '../../../shared/pipes/mock.safe.pipe';
import { MockUserService } from '../../../shared/services/mock.user.service';
import { UserService } from '../../../shared/services/user.service';
import { MockApiService } from '../../../shared/services/mock.api.service';
import { ApiService } from '../../../shared/services/api.service';
import { journeys } from '../../../shared/interfaces/journeys';

describe('DishDetailComponent', () => {
  let component: DishDetailComponent;
  let fixture: ComponentFixture<DishDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        DishDetailComponent,
        SafePipeMock
      ],
      providers: [
        {provide: UserService, useClass: MockUserService},
        {provide: ApiService, useClass: MockApiService},
        {provide: journeys, useValue: journeys}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
