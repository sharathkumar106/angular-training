import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { WeatherData } from 'src/app/core/models';
import { FavouriteService } from 'src/app/shared/services/favourite.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() data: WeatherData[];
  @Output() itemSelected = new EventEmitter<number>();
  @Output() unfavorite = new EventEmitter<number>();

  constructor(
    private favouriteService: FavouriteService
  ) { }

  ngOnInit(): void {
  }

  getIcon(type: string): string {
    let iconName = '';
    switch (type) {
      case 'Thunderstorm':
        iconName = 'icon_thunderstorm';
        break;
      case 'Drizzle':
        iconName = 'icon_mostly_cloudy';
        break;
      case 'Rain':
        iconName = 'icon_rain';
        break;
      case 'Snow':
        iconName = 'icon_snow';
        break;
      case 'Clear':
        iconName = 'icon_clear_night';
        break;
      case 'Clouds':
        iconName = 'icon_mostly_cloudy';
        break;
      case 'Haze':
        iconName = 'icon_partly_cloudy';
        break;
      default:
        iconName = 'icon_mostly_sunny';
        break;
    }
    const iconPath = `assets/ic_conditions/${iconName}/${iconName}.svg`;
    return iconPath;
  }

  checkFavourite(item: WeatherData): boolean {
    return this.favouriteService.checkFavourites(item);
  }

}
