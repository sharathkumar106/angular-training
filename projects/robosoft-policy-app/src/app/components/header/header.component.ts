import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loginStatus: boolean;
  username: string;
  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.authService.getLoginStatus.subscribe((status: boolean) => {
      this.loginStatus = status;
      this.username = localStorage.getItem('token');
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
