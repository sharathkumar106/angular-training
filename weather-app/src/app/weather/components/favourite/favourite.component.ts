import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { WeatherData } from 'src/app/core/models';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {
  noDataFound = false;
  favourites: WeatherData[];
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onClear(): void {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.favourites = undefined;
      this.noDataFound = true;
      console.log('The dialog was closed');
    });
  }
}
