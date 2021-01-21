import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WeatherData } from 'src/app/core/models';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { FavouriteService } from 'src/app/shared/services/favourite.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {
  noDataFound = false;
  data: WeatherData[];
  constructor(
    public dialog: MatDialog,
    private favouriteService: FavouriteService
  ) { }

  ngOnInit(): void {
    this.data = this.favouriteService.favourites ? this.favouriteService.favourites : [];
    this.favouriteService.favoritesChanged.subscribe(res => this.data = res);
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

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.data = undefined;
      this.noDataFound = true;
      console.log('The dialog was closed');
    });
  }
}
