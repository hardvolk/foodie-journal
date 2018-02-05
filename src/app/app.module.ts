import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { AppComponent } from './app.component';
import { HomeMainMenuComponent } from './home-main-menu/home-main-menu.component';
import { TracksComponent } from './tracks/tracks.component';
import { HomeComponent } from './home/home.component';
import { ProgressbarModule } from 'ngx-bootstrap';
import { TrackComponent } from './tracks/track/track.component';
import { ProgressBoxComponent } from './tracks/progress-box/progress-box.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeMainMenuComponent,
    TracksComponent,
    HomeComponent,
    TrackComponent,
    ProgressBoxComponent
  ],
  imports: [
    BrowserModule,

    // Bootstrap v4 components.
    ProgressbarModule.forRoot(),
  ],
  providers: [AuthService],
  bootstrap: [ HomeMainMenuComponent ]
})
export class AppModule { }
