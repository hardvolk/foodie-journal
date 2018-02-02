import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { AppComponent } from './app.component';
import { HomeMainMenuComponent } from './home-main-menu/home-main-menu.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { UserService } from '../shared/services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../shared/services/api.service';
import { SafePipe } from '../shared/pipes/safe.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeMainMenuComponent,
    LoginComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService, UserService],
  bootstrap: [ HomeMainMenuComponent ]
})
export class AppModule { }
