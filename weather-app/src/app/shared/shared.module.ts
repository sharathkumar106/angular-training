import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, NavigationComponent, NoDataFoundComponent, TableComponent } from './components';

@NgModule({
  declarations: [HeaderComponent, TableComponent, NavigationComponent, NoDataFoundComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    TableComponent,
    NavigationComponent,
    NoDataFoundComponent,
    CommonModule
  ]
})
export class SharedModule { }
