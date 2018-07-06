import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
=======

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
>>>>>>> 47d8bc1217c69b16606ac963ca284a626b1a9b76
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
