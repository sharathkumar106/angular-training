import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { WeatherRoutingModule } from './weather-routing.module';
import { FavouriteComponent, HomeComponent, RecentSearchComponent } from './components';

@NgModule({
  declarations: [HomeComponent, FavouriteComponent, RecentSearchComponent],
  imports: [
    SharedModule,
    WeatherRoutingModule
  ],
  exports: [
    HomeComponent, FavouriteComponent, RecentSearchComponent
  ]
})
export class WeatherModule { }
