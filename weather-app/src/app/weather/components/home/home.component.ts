import { SearchService } from 'src/app/shared/services/search.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

import { WeatherData } from 'src/app/core/models';
import { WeatherService } from 'src/app/weather/services/weather.service';
import { FavouriteService } from 'src/app/shared/services/favourite.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  weatherSubscription: Subscription;
  searchSubscription: Subscription;
  city: string;
  data: WeatherData;
  switchUnit = new FormControl(true); // Celsius
  error = false;
  isFavourite = false;

  constructor(
    private weatherService: WeatherService,
    private searchService: SearchService,
    private favouriteService: FavouriteService,
    private storageService: StorageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.storageService.getFavouritesFromLocal();
    this.storageService.getSearchFromLocal();
    const searchCityName = this.searchService.searchKey;
    this.weatherService.getWeatherData(searchCityName).subscribe(res => this.data = res);
    this.weatherSubscription = this.weatherService.dataChanged.subscribe(data => {
      if (!data) {
        this.error = true;
        return;
      }
      this.data = data;
      if (!this.switchUnit.value) {
        this.data.main.temp = this.toFahrenheit(data.main.temp);
        this.data.main.temp_min = this.toFahrenheit(data.main.temp_min);
        this.data.main.temp_max = this.toFahrenheit(data.main.temp_max);
      }
      this.isFavourite = this.favouriteService.checkFavourites(data);
    });
    this.searchSubscription = this.searchService.searchHistoryChanged.subscribe(res => {
      this.storageService.saveSearchToLocal(res);
    });
  }

  onFavoriteAdd(data: WeatherData): void {
    if (!this.isFavourite) {
      this.favouriteService.addToFavourites(data);
      this.isFavourite = this.favouriteService.checkFavourites(data);
    }
    else {
      this.favouriteService.removeFavourite(data);
      this.isFavourite = this.favouriteService.checkFavourites(data);
    }
  }

  getIcon(type: string): string {
    let iconName = '';
    switch (type) {
      case 'Thunderstorm':
        iconName = 'icon_thunderstorm';
        break;
      case 'Drizzle':
        iconName = 'icon_mostly_cloudy';
        break;
      case 'Rain':
        iconName = 'icon_rain';
        break;
      case 'Snow':
        iconName = 'icon_snow';
        break;
      case 'Clear':
        iconName = 'icon_clear_night';
        break;
      case 'Clouds':
        iconName = 'icon_mostly_cloudy';
        break;
      case 'Haze':
        iconName = 'icon_partly_cloudy';
        break;
      default:
        iconName = 'icon_mostly_sunny';
        break;
    }
    const iconPath = `assets/ic_conditions/${iconName}/${iconName}.svg`;
    return iconPath;
  }

  onSwitchUnit(value: number): void {
    try {
      // If switchUnit False/True - Celsius/Fahrenheit
      this.data.main.temp = !this.switchUnit.value ? this.toCelsius(value) : this.toFahrenheit(value);
      this.data.main.temp_min = !this.switchUnit.value ?
        this.toCelsius(this.data.main.temp_min) : this.toFahrenheit(this.data.main.temp_min);
      this.data.main.temp_max = !this.switchUnit.value ?
        this.toCelsius(this.data.main.temp_max) : this.toFahrenheit(this.data.main.temp_max);
    }
    catch (err) {
      this.error = true;
      console.error(err.message);
    }
  }

  toCelsius(value: number): number {
    return (value - 32) * 5 / 9;
  }

  toFahrenheit(value: number): number {
    return (value * 9 / 5) + 32;
  }

  onGoBack(): void {
    this.error = false;
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    this.weatherSubscription.unsubscribe();
    this.searchSubscription.unsubscribe();
  }
}
