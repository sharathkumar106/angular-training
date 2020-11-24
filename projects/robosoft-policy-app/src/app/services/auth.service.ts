import { Injectable } from '@angular/core';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  redirectURL: string;
  userList: Login = { username: 'admin', password: '123' };

  constructor() { }

  login(username: string, password: string): Promise<boolean> {
    if (username === this.userList.username && password === this.userList.password) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('token', username);
      this.isLoggedIn = true;
      console.log('Inside login auth');
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedIn);
      }, 2000);
    });
  }

  checkLoginStatus(): boolean {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.isLoggedIn = true;
      console.log('LoginStatusCheckedTrue: ', this.isLoggedIn);
      return this.isLoggedIn;
    }
    console.log('LoginStatusChecked: ', this.isLoggedIn);
    return this.isLoggedIn;
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('token');
    console.log('Inside Logout');
  }
}
