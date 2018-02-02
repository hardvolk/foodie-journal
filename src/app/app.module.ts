import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthService } from '../shared/services/auth.service'
import { AppComponent } from './app.component';
import { HomeMainMenuComponent } from './home-main-menu/home-main-menu.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeMainMenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AuthService],
  bootstrap: [ HomeMainMenuComponent ]
})
export class AppModule { }
