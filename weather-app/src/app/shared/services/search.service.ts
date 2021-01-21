import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { WeatherData } from 'src/app/core/models';
import { WeatherService } from 'src/app/weather/services/weather.service';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    searchKey: string;
    searchHistory: WeatherData[] = [];
    searchHistoryChanged = new Subject<WeatherData[]>();
    constructor(
        private weatherService: WeatherService
    ) { }

    searchByCityName(city: string): void {
        let searchResult: WeatherData;
        this.weatherService.getWeatherData(city).subscribe(res => {
            this.searchKey = city;
            searchResult = res;
            this.searchHistory.unshift(searchResult);
            this.searchHistoryChanged.next(this.searchHistory);
        });
    }

    clearAll(): void {
        this.searchHistory = [];
        this.searchKey = undefined;
        this.searchHistoryChanged.next(this.searchHistory);
    }
}
