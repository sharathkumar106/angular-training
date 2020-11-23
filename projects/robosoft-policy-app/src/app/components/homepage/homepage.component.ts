import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  isOverlayOpen = false;
  isMenuOpen = false;

  constructor(public matDialog: MatDialog) {

  }

  ngOnInit(): void {
  }

  openModal(): void {
    const dialogRef = this.matDialog.open(ModalComponent);
    this.isMenuOpen = false;
    dialogRef.afterClosed().subscribe(() => {
      this.isMenuOpen = true;
    });
  }

}
