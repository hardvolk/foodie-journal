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
});
