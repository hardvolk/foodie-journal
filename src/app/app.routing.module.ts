import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { DishDetailComponent } from './dish/dish-detail/dish-detail.component';
import { HomeComponent } from './home/home.component';
import { JourneyOverviewComponent } from './journey-overview/journey-overview.component';
import { TracksListComponent } from './tracks/tracks-list/tracks-list.component';
// Guards
import { AuthGuardService } from './auth/auth-guard.service';
import { HomeGuardService } from './auth/home-guard.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent, canActivate: [HomeGuardService] },
  { path: 'tracks', component: TracksListComponent, canActivate: [AuthGuardService] },
  { path: 'tracks/:trackId', component: JourneyOverviewComponent, canActivate: [AuthGuardService] },
  { path: 'tracks/:trackId/:dishId', component: DishDetailComponent, canActivate: [AuthGuardService] },
  { path: '**', redirectTo: 'home', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    AuthGuardService,
    HomeGuardService
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
