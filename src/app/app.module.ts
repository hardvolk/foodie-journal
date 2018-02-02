import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
<<<<<<< HEAD
  providers: [ApiService, UserService],
=======
  providers: [ UserService],
>>>>>>> 74fde68da0c80b69c96879543b39e412bf7a2683
  bootstrap: [ HomeMainMenuComponent ]
})
export class AppModule { }
