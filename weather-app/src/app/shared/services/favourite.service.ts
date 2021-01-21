import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { WeatherData } from 'src/app/core/models';
import { SearchService } from 'src/app/shared/services/search.service';

@Injectable({
    providedIn: 'root'
})
export class FavouriteService {
    favourites: WeatherData[] = [];
    favoritesChanged = new Subject<WeatherData[]>();
    constructor(
        private searchService: SearchService,
        private router: Router
    ) { }

    addToFavourites(data: WeatherData): void {
        if (!this.favourites) {
            this.favourites = [data];
            this.favoritesChanged.next(this.favourites);
        }
        else {
            this.favourites.unshift(data);
            this.favoritesChanged.next(this.favourites);
        }
    }

    removeFavourite(data: WeatherData): void {
        const index = this.favourites.findIndex(item => item.city === data.city);
        this.favourites.splice(index, 1);
        this.favoritesChanged.next(this.favourites);
    }

    removeFavouriteByIndex(index: number): void {
        this.favourites.splice(index, 1);
        this.favoritesChanged.next(this.favourites);
    }

    removeAllFavourites(): void {
        this.favourites = [];
        this.favoritesChanged.next(this.favourites);
    }

    selectItem(index: number): void {
        this.searchService.searchKey = this.favourites[index].city;
        this.router.navigate(['']);
    }

    checkFavourites(data: WeatherData): boolean {
        if (this.favourites) {
            return this.favourites.findIndex(item => item.city === data.city) >= 0;
        }
        return false;
    }
}
