import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { WeatherData } from 'src/app/core/models';
import { WeatherService } from 'src/app/weather/services/weather.service';
import { DialogComponent } from '../components/dialog/dialog.component';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    searchKey: string;
    searchHistory: WeatherData[] = [];
    searchHistoryChanged = new Subject<WeatherData[]>();
    constructor(
        private weatherService: WeatherService,
        private router: Router,
        public dialog: MatDialog
    ) { }

    searchByCityName(city: string): void {
        let searchResult: WeatherData;
        this.weatherService.getWeatherData(city).subscribe(res => {
            this.searchKey = city;
            searchResult = res;
            if (this.searchHistory) {
                this.searchHistory.unshift(searchResult);
                this.searchHistoryChanged.next(this.searchHistory);
            }
            else {
                this.searchHistory = [searchResult];
                this.searchHistoryChanged.next(this.searchHistory);
            }
        },
            err => {
                this.searchHistoryChanged.next(null);
            });
    }

    selectItem(index: number): void {
        this.searchKey = this.searchHistory[index].city;
        this.router.navigate(['']);
    }

    clearAll(): void {
        this.searchHistory = [];
        this.searchKey = undefined;
        this.searchHistoryChanged.next(this.searchHistory);
    }
}
