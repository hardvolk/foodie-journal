import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { DishDetailComponent } from './dish/dish-detail/dish-detail.component';
import { HomeComponent } from './home/home.component';
import { JourneyOverviewComponent } from './journey-overview/journey-overview.component';
import { LoginComponent } from './login/login.component';
import { ProgressBoxComponent } from './tracks/progress-box/progress-box.component';
import { TracksListComponent } from './tracks/tracks-list/tracks-list.component';
import { TrackComponent } from './tracks/track/track.component';
import { ProgressCircleComponent } from './progress-circle/progress-circle.component';
// Guards
import { AuthGuardService } from './auth/auth-guard.service';
import { HomeGuardService } from './auth/home-guard.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent, canActivate: [HomeGuardService] },
  { path: 'tracks', component: TracksListComponent, canActivate: [AuthGuardService]},
  { path: 'tracks/:trackId', component: JourneyOverviewComponent, canActivate: [AuthGuardService]},
  { path: 'tracks/:trackId/:dishId', component: DishDetailComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthGuardService,
    HomeGuardService
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

export const routingComponents = [
  DishDetailComponent,
  HomeComponent,
  JourneyOverviewComponent,
  LoginComponent,
  ProgressBoxComponent,
  TracksListComponent,
  TrackComponent,
  DishDetailComponent,
  ProgressCircleComponent
];
