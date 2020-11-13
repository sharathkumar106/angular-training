import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;

  constructor() { }

  login(): Promise<boolean> {
    this.isLoggedIn = true;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedIn);
      }, 2000);
    });
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
