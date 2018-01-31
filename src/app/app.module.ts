import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { AppComponent } from './app.component';
import { HomeMainMenuComponent } from './home-main-menu/home-main-menu.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { UserService } from '../shared/services/user.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeMainMenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AuthService, UserService],
  bootstrap: [ HomeMainMenuComponent ]
})
export class AppModule { }
