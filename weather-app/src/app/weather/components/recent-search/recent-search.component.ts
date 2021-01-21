import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherData } from 'src/app/core/models';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-recent-search',
  templateUrl: './recent-search.component.html',
  styleUrls: ['./recent-search.component.scss']
})
export class RecentSearchComponent implements OnInit, OnDestroy {
  searchSubscription: Subscription;
  data: WeatherData[];
  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.data = this.searchService.searchHistory ? this.searchService.searchHistory : [];
    this.searchSubscription = this.searchService.searchHistoryChanged.subscribe(res => {
      this.data = res;
    });
  }

  onClear(): void {
    this.searchService.clearAll();
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }
}
