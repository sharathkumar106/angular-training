import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent, NavigationComponent, NoDataFoundComponent, TableComponent } from './components';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [HeaderComponent, TableComponent, NavigationComponent, NoDataFoundComponent, DialogComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
  ],
  exports: [
    HeaderComponent,
    TableComponent,
    NavigationComponent,
    NoDataFoundComponent,
    DialogComponent,
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
  ]
})
export class SharedModule { }
