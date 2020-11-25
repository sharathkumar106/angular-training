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

  newPassword: string;
  confirmPassword: string;
  invalidPasswordText = '';
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
      this.invalidPasswordText = 'Passwords do not match. Please try again';
    }
    else if (this.newPassword === this.currentUser.password) {
      this.invalidPasswordText = 'New Password cannot be same as old password!';
    }
    else if (!this.newPassword || !this.confirmPassword) {
      this.invalidPasswordText = 'Please enter a password!';
    }
    else {
      alert('Password Reset Successful!\nPlease login to continue');
      this.authService.updatePassword(this.currentUser.username, this.newPassword);
      this.authService.logout();
      this.router.navigate(['/login']);
    }
  }

}
