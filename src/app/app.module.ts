import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../shared/services/api.service';
import { SafePipe } from '../shared/pipes/safe.pipe';
import { UserService } from '../shared/services/user.service';
import { ProgressbarModule } from 'ngx-bootstrap';
import { TrackComponent } from './tracks/track/track.component';
import { ProgressBoxComponent } from './tracks/progress-box/progress-box.component';
import { DishDetailComponent } from './dish/dish-detail/dish-detail.component';
import { HomeMainMenuComponent } from './home-main-menu/home-main-menu.component';
import { AppRoutingModule, routingComponents } from './app.routing.module';
import { AccordionModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    HomeMainMenuComponent,
    SafePipe,
    routingComponents
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
    HomeMainMenuComponent
  ]
})

export class AppModule { }
