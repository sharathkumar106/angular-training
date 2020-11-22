import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { VendorsModule } from '../vendors/vendors.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ResetPasswordComponent } from './components/login/reset-password/reset-password.component';
import { NotificationComponent } from './components/login/notification/notification.component';
import { ModalComponent } from './components/homepage/modal/modal.component';
import { SidebarComponent } from './components/homepage/sidebar/sidebar.component';
import { QuestionnaireComponent } from './components/homepage/questionnaire/questionnaire.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomepageComponent,
    ResetPasswordComponent,
    NotificationComponent,
    ModalComponent,
    SidebarComponent,
    QuestionnaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    VendorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
