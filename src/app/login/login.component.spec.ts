import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockUserService } from '../../shared/services/mock.user.service';
import { UserService } from '../../shared/services/user.service';
import { LoginComponent } from './login.component';
import { NgModel } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    const LoginComponentMock = {};

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ LoginComponent, NgModel ],
      providers: [{ provide: UserService, useClass: MockUserService}]
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

  describe('Checking username and password', () => {
    it('login should work with right user and password', () => {
      const checkLogin = component.verifyPassword('exampleone', 'example1');
      expect(checkLogin).toBe(true);
    });

    it('login password incorrect returns false', () => {
      const checkLogin = component.verifyPassword('exampleone', 'wrongPass');
      expect(checkLogin).toBe(false);
    });

    it('login username returns true when correct', () => {
      const checkLogin = component.loginUser('exampleone', 'example1');
      expect(checkLogin).toBe(true);
    });

    it('login username incorrect returns false', () => {
      const checkLogin = component.loginUser('WrongUser', 'example1');
      expect(checkLogin).toBe(false);
    });
  });

  // it('checking logout functions', () => {
  // });

});
