import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TracksListComponent } from './tracks/tracks-list/tracks-list.component';
import { JourneyOverviewComponent } from './journey-overview/journey-overview.component';
import { DishDetailComponent } from './dish/dish-detail/dish-detail.component';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'tracks', component: TracksListComponent},
  {path: 'tracks/:id', component: JourneyOverviewComponent},
  {path: 'tracks/:id/dishes/:dishId', component: DishDetailComponent},  // TODO: change the tracks to a subroute.
  {path: 'tracks/:id/:x', redirectTo: 'tracks/:id', pathMatch: 'prefix'},
  {path: '**', redirectTo: 'home', pathMatch: 'prefix'},
];


