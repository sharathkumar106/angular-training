import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  newPassword: string;
  confirmPassword: string;
  invalidPasswordText: string;
  constructor() { }

  ngOnInit(): void {
  }

  validatePasswordMatch(): void {
    if (this.newPassword !== this.confirmPassword) {
      this.invalidPasswordText = 'Passwords do not match. Please try again';
    }
    else {
      this.invalidPasswordText = '';
    }
  }

}
