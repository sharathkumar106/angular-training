import { Injectable } from '@angular/core';
import { WeatherData } from 'src/app/core/models';
import { FavouriteService } from 'src/app/shared/services/favourite.service';
import { SearchService } from 'src/app/shared/services/search.service';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    constructor(
        private favouriteService: FavouriteService,
        private searchService: SearchService
    ) { }

    saveSearchToLocal(data: WeatherData[]): void {
        localStorage.setItem('searchHistory', JSON.stringify(data));
    }

    saveFavoritesToLocal(data: WeatherData[]): void {
        localStorage.setItem('favourites', JSON.stringify(data));
    }

    getSearchFromLocal(): WeatherData[] {
        const data = JSON.parse(localStorage.getItem('searchHistory'));
        this.searchService.searchHistory = data;
        return data;
    }

    getFavouritesFromLocal(): WeatherData[] {
        const data = JSON.parse(localStorage.getItem('favourites'));
        this.favouriteService.favourites = data;
        return data;
    }
}
