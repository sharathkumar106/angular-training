import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { WeatherData } from 'src/app/core/models';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { FavouriteService } from 'src/app/shared/services/favourite.service';
import { SearchService } from 'src/app/shared/services/search.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit, OnDestroy {
  favouriteSubscription: Subscription;
  searchSubscription: Subscription;
  data: WeatherData[];
  constructor(
    public dialog: MatDialog,
    private favouriteService: FavouriteService,
    private searchService: SearchService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.data = this.storageService.getFavouritesFromLocal();
    this.favouriteSubscription = this.favouriteService.favoritesChanged.subscribe(res => {
      this.data = res;
      this.storageService.saveFavoritesToLocal(res);
    });
    this.searchSubscription = this.searchService.searchHistoryChanged.subscribe(res => {
      this.storageService.saveSearchToLocal(res);
    });
  }

  onItemSelect(index: number): void {
    this.favouriteService.selectItem(index);
  }

  onUnfavourite(index: number): void {
    this.favouriteService.removeFavouriteByIndex(index);
  }

  onClear(): void {
    this.openDialog();
  }

  ngOnDestroy(): void {
    this.favouriteSubscription.unsubscribe();
    this.searchSubscription.unsubscribe();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
}
