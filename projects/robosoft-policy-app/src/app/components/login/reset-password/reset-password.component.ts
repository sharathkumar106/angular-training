import { Login } from '../../../models/login.model';
import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  showMessage = false;
  newPassword: string;
  confirmPassword: string;
  errorMessage = '';
  currentUser: Login;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getUserInfo(localStorage.getItem('token'));
  }

  validatePasswordMatch(): void {
    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match. Please try again';
      this.showMessage = true;
    }
    else if (this.newPassword === this.currentUser.password) {
      this.errorMessage = 'New Password cannot be same as old password!';
      this.showMessage = true;
    }
    else if (!this.newPassword || !this.confirmPassword) {
      this.errorMessage = 'Please enter a password!';
      this.showMessage = true;
    }
    else {
      this.errorMessage = 'Password Reset Successful! Please login to continue';
      this.showMessage = true;
      this.authService.updatePassword(this.currentUser.username, this.newPassword);
      this.authService.logout();
      this.router.navigate(['/login']);
    }
  }
}
