import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

import { WeatherData } from 'src/app/core/models';
import { WeatherService } from 'src/app/weather/services/weather.service';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  DEFAULT_CITY = 'Mangalore, Karnataka';
  city: string;
  data: WeatherData;
  switchUnit = new FormControl(true); // Celsius
  error = false;

  constructor(
    private weatherService: WeatherService) { }

  ngOnInit(): void {
    // this.weatherService.getWeatherData(this.DEFAULT_CITY).subscribe((resData: WeatherData) => {
    //   this.weatherService.weatherData = resData;
    //   this.weatherService.dataChanged.next(resData);
    // });
    this.weatherService.getWeatherData();
    this.subscription = this.weatherService.dataChanged.subscribe(data => {
      this.data = data;
      if (!this.switchUnit.value) {
        this.data.main.temp = this.toFahrenheit(data.main.temp);
        this.data.main.temp_min = this.toFahrenheit(data.main.temp_min);
        this.data.main.temp_max = this.toFahrenheit(data.main.temp_max);
      }
    });
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}


/*

Sample Empty WeatherData
 city: '',
    main: {
      humidity: 0,
      pressure: 0,
      temp: 0,
      temp_max: 0,
      temp_min: 0,
      feels_like: 0
    },
    clouds: 0,
    precipitation: 0,
    visibility: 0,
    wind: 0,
    condition: '',
    condition_desc: ''

*/
