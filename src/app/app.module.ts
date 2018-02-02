import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeMainMenuComponent } from './home-main-menu/home-main-menu.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { UserService } from '../shared/services/user.service';
import { JourneyOverviewComponent } from './journey-overview/journey-overview.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeMainMenuComponent,
    LoginComponent,
    JourneyOverviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ UserService],
  bootstrap: [ HomeMainMenuComponent ]
})
export class AppModule { }
