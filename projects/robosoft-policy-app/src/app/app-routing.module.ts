import { HomepageComponent } from './components/homepage/homepage.component';
import { NotificationComponent } from './components/login/notification/notification.component';
import { ResetPasswordComponent } from './components/login/reset-password/reset-password.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: '', pathMatch: 'full', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
