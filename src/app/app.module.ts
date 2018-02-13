import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ProgressbarModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TracksListComponent } from './tracks/tracks-list/tracks-list.component';
import { TrackComponent } from './tracks/track/track.component';
import { ProgressBoxComponent } from './tracks/progress-box/progress-box.component';
import { JourneyOverviewComponent } from './journey-overview/journey-overview.component';
import { DishDetailComponent } from './dish/dish-detail/dish-detail.component';
import { ProgressCircleComponent } from './progress-circle/progress-circle.component';

import { UserService } from '../shared/services/user.service';
import { ApiService } from '../shared/services/api.service';

import { SafePipe } from '../shared/pipes/safe.pipe';

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
    DishDetailComponent,
    ProgressCircleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    ProgressbarModule.forRoot(),
    AccordionModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    ApiService,
    UserService
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
