import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TracksListComponent } from './tracks/tracks-list/tracks-list.component';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'tracks', component: TracksListComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'prefix'},
];


