import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  redirectURL: string;
  userList: Login = { username: 'admin', password: '123' };
  public getLoginStatus = new Subject();

  constructor() { }

  login(username: string, password: string): Promise<boolean> {
    if (username === this.userList.username && password === this.userList.password) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('token', username);
      this.isLoggedIn = true;
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.getLoginStatus.next(this.isLoggedIn); // next() is an alternate to emit()
        resolve(this.isLoggedIn);
      }, 2000);
    });
  }

  checkLoginStatus(): boolean {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.isLoggedIn = true;
      return this.isLoggedIn;
    }
    return this.isLoggedIn;
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('token');
  }
}
