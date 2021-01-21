import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WeatherData } from 'src/app/core/models';
import { WeatherService } from 'src/app/weather/services/weather.service';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    searchKey = new Subject<string>();
    constructor(
        private weatherService: WeatherService
    ) { }

    searchByCityName(city: string): void {
        this.weatherService.getWeatherData(city);
    }
}
