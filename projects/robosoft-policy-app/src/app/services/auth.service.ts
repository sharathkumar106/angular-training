import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // DUMMY USERS
  users = [
    {
      username: 'admin',
      password: '123'
    },
    {
      username: 'sharath',
      password: 'user123'
    }
  ];

  isLoggedIn = false;
  redirectURL: string;
  public getLoginStatus = new Subject();

  constructor() { }

  validateUser(username: string, password: string): boolean {
    if (this.users.findIndex((user) => user.username === username && user.password === password) !== -1) {
      return true;
    }
    return false;
  }

  getUserInfo(username: string): Login {
    return this.users.find(user => user.username === username);
  }

  updatePassword(username: string, newPsasword: string): void {
    this.users.forEach(user => {
      if (user.username === username) {
        user.password = newPsasword;
      }
    });
  }

  login(username: string, password: string): Promise<boolean> {
    if (this.validateUser(username, password)) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('token', username);
      this.isLoggedIn = true;
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.getLoginStatus.next(this.isLoggedIn);
        resolve(this.isLoggedIn);
      }, 2000);
    });
  }

  checkLoginStatus(): boolean {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.isLoggedIn = true;
      this.getLoginStatus.next(this.isLoggedIn); // next() is an alternate to emit()
      return this.isLoggedIn;
    }
    return this.isLoggedIn;
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('token');
    this.getLoginStatus.next(this.isLoggedIn);
  }
}
