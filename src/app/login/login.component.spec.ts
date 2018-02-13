import { async, ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { NO_ERRORS_SCHEMA} from '@angular/core/';
=======
import { MockUserService } from '../../shared/services/mock.user.service';
import { UserService } from '../../shared/services/user.service';
>>>>>>> af3b9309ef8c6d1b426cae8ff335123b04abe068
import { LoginComponent } from './login.component';
import { NgModel } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    const LoginComponentMock = {};

    TestBed.configureTestingModule({
<<<<<<< HEAD
      declarations: [ LoginComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: LoginComponent, useValue: LoginComponentMock}
      ]
=======
      imports: [RouterTestingModule],
      declarations: [ LoginComponent, NgModel ],
      providers: [{ provide: UserService, useClass: MockUserService}]
>>>>>>> af3b9309ef8c6d1b426cae8ff335123b04abe068
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
