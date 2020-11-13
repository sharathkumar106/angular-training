import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  message: string;

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  setMessage(): void {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login(): void {
    this.message = 'Trying to log in ...';

    this.authService.login().then(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // const redirectUrl = '/admin';

        // Redirect the user
        this.router.navigate([this.authService.redirectUrl]);
      }
    });
  }

  logout(): void {
    this.authService.logout();
    this.setMessage();
  }
}
