import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeMainMenuComponent } from './home-main-menu/home-main-menu.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../shared/services/api.service';
import { SafePipe } from '../shared/pipes/safe.pipe';
import { UserService } from '../shared/services/user.service';
<<<<<<< HEAD
=======
import { JourneyOverviewComponent } from './journey-overview/journey-overview.component';
>>>>>>> 07dbe7fd41e41de8eced6bb2bd1b1f4d05a0d8c4

@NgModule({
  declarations: [
    AppComponent,
    HomeMainMenuComponent,
    LoginComponent,
<<<<<<< HEAD
    SafePipe
=======
    JourneyOverviewComponent
>>>>>>> 07dbe7fd41e41de8eced6bb2bd1b1f4d05a0d8c4
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ApiService, 
    UserService],
  bootstrap: [ HomeMainMenuComponent ]
})
export class AppModule { }
