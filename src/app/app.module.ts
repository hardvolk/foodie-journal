import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeMainMenuComponent } from './home-main-menu/home-main-menu.component';
import { TracksListComponent } from './tracks/tracks-list/tracks-list.component';
import { HomeComponent } from './home/home.component';
import { ProgressbarModule } from 'ngx-bootstrap';
import { TrackComponent } from './tracks/track/track.component';
import { ProgressBoxComponent } from './tracks/progress-box/progress-box.component';
import { JourneyOverviewComponent } from './journey-overview/journey-overview.component';
import { UserService } from '../shared/services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeMainMenuComponent,
    LoginComponent,
    JourneyOverviewComponent,
    HomeComponent,
    TracksListComponent,
    HomeComponent,
    TrackComponent,
    ProgressBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

    // Bootstrap v4 components.
    ProgressbarModule.forRoot(),],
  providers: [ UserService],
  bootstrap: [ HomeMainMenuComponent ]
})
export class AppModule { }

