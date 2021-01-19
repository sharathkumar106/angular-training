import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent, NavigationComponent, NoDataFoundComponent, TableComponent } from './components';

@NgModule({
  declarations: [HeaderComponent, TableComponent, NavigationComponent, NoDataFoundComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    TableComponent,
    NavigationComponent,
    NoDataFoundComponent,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
