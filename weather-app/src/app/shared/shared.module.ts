import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent, NavigationComponent, NoDataFoundComponent, TableComponent } from './components';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [HeaderComponent, TableComponent, NavigationComponent, NoDataFoundComponent, DialogComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    TableComponent,
    NavigationComponent,
    NoDataFoundComponent,
    DialogComponent,
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
