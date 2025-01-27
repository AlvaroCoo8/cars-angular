import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarCeroComponent } from './cars/car-cero/car-cero.component';
import { CarOneComponent } from './cars/car-one/car-one.component';
import { CarTwoComponent } from './cars/car-two/car-two.component';
import { ForOldComponent } from './components/for-old/for-old.component';
import { ForLatestComponent } from './components/for-latest/for-latest.component';

@NgModule({
  declarations: [
    AppComponent,
    CarCeroComponent,
    CarOneComponent,
    CarTwoComponent,
    ForOldComponent,
    ForLatestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
