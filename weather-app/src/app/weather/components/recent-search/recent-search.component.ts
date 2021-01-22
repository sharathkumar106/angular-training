import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherData } from 'src/app/core/models';
import { FavouriteService } from 'src/app/shared/services/favourite.service';
import { SearchService } from 'src/app/shared/services/search.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-recent-search',
  templateUrl: './recent-search.component.html',
  styleUrls: ['./recent-search.component.scss']
})
export class RecentSearchComponent implements OnInit, OnDestroy {
  searchSubscription: Subscription;
  favouriteSubscription: Subscription;
  data: WeatherData[];
  constructor(
    private searchService: SearchService,
    private favouriteService: FavouriteService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.data = this.storageService.getSearchFromLocal() || [];
    this.searchSubscription = this.searchService.searchHistoryChanged.subscribe(res => {
      this.data = res;
      this.storageService.saveSearchToLocal(res);
    });
    this.favouriteSubscription = this.favouriteService.favoritesChanged.subscribe(res => {
      this.storageService.saveFavoritesToLocal(res);
    });

  }

  onFavouriteClick(index: number): void {
    const item = this.data[index];
    if (this.favouriteService.checkFavourites(item)) {
      this.favouriteService.removeFavourite(item);
    }
    else {
      this.favouriteService.addToFavourites(item);
    }
  }

  onItemSelect(index: number): void {
    // this.searchService.selectItem(index);
  }

  onClear(): void {
    this.searchService.clearAll();
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
    this.favouriteSubscription.unsubscribe();
  }
}
