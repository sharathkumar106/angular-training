import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-search',
  templateUrl: './recent-search.component.html',
  styleUrls: ['./recent-search.component.scss']
})
export class RecentSearchComponent implements OnInit {
  noDataFound = false;
  searchHistory: any[];
  constructor() { }

  ngOnInit(): void {
  }

  onClear(): void {
    this.searchHistory = undefined;
    this.noDataFound = true;
  }

}
