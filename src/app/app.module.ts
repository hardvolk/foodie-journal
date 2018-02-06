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
import { JourneyOverviewComponent } from './journey-overview/journey-overview.component';
import { HomeComponent } from './home/home.component';
import { TracksListComponent } from './tracks/tracks-list/tracks-list.component';
import { ProgressbarModule } from 'ngx-bootstrap';
import { TrackComponent } from './tracks/track/track.component';
import { ProgressBoxComponent } from './tracks/progress-box/progress-box.component';
import { DishDetailComponent } from './dish/dish-detail/dish-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeMainMenuComponent,
    LoginComponent,
    SafePipe,
    JourneyOverviewComponent,
    HomeComponent,
    TrackComponent,
    ProgressBoxComponent,
    TracksListComponent,
    DishDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ProgressbarModule.forRoot(),
  ],
  providers: [
    ApiService,
    UserService],
  bootstrap: [ HomeMainMenuComponent ]
})
export class AppModule { }
