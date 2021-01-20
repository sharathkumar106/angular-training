import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {
  noDataFound = false;
  favourites: any[];
  constructor() { }

  ngOnInit(): void {
  }

  onClear(): void {
    this.favourites = undefined;
    this.noDataFound = true;
  }

}
