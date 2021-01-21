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
  data: WeatherData[];
  constructor(
    private searchService: SearchService,
    private favouriteService: FavouriteService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.storageService.getFavouritesFromLocal();
    const localData = this.storageService.getSearchFromLocal();
    this.data = this.searchService.searchHistory && !localData ? this.searchService.searchHistory : localData;
    this.searchSubscription = this.searchService.searchHistoryChanged.subscribe(res => {
      this.data = res;
      this.storageService.saveSearchToLocal(res);
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
    this.searchService.selectItem(index);
  }

  onClear(): void {
    this.searchService.clearAll();
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }
}
