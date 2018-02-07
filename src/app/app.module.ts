import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
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
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SafePipe,
    JourneyOverviewComponent,
    HomeComponent,
    TracksListComponent,
    TrackComponent,
    ProgressBoxComponent,
    TracksListComponent,
    DishDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {}),

    ProgressbarModule.forRoot(),
  ],
  providers: [
    ApiService,
    UserService],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
