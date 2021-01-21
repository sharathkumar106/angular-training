import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
  ],
  exports: [
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
  ]
})
export class CoreModule { }
