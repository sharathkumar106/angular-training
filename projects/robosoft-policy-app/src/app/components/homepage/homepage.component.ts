import { Component, OnInit } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  minDate: Date;
  maxDate: Date;
  isOverlayOpen = false;
  isMenuOpen = false;

  constructor(public matDialog: MatDialog) {
    // Set the minimum to January 1st 20 years in the past and December 31st 10 years in the future.
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 10, 11, 31);
  }

  ngOnInit(): void {
  }

  openModal(userMode: string): void {
    const dialogRef = this.matDialog.open(ModalComponent);
    this.isMenuOpen = false;
    dialogRef.afterClosed().subscribe(() => {
      this.isMenuOpen = true;
    });
  }

}
