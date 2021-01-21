import { Component } from '@angular/core';
import { WeatherData } from './core/models';
import { SearchService } from './shared/services/search.service';
import { WeatherService } from './weather/services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-app';
  showMenu = false;

  constructor(
    private searchService: SearchService
  ) { }

  onSearch(searchItem: string): void {
    this.searchService.searchByCityName(searchItem);
  }
}
