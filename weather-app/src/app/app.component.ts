import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-app';
  showMenu = false;
  searchValue: string;

  onSearch(searchItem: string): void {
    this.searchValue = searchItem;
    console.log(searchItem);
  }
}
