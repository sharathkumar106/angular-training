import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  isOverlayOpen = false;
  isMenuOpen = false;

  constructor(private matDialog: MatDialog) {

  }

  ngOnInit(): void {
  }

  openModal(userMode: string): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      userMode
    };
    const dialogRef = this.matDialog.open(ModalComponent, dialogConfig);
    this.isMenuOpen = false;
    dialogRef.afterClosed().subscribe(() => {
      this.isMenuOpen = true;
    });
  }

}
