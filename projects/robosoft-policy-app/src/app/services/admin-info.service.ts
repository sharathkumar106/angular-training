import { Admin } from './../models/admin.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminInfoService {

  // DUMMY ADMINS
  admins = [
    {
      mode: 'Admin',
      name: 'Sharath',
      employeeCode: 'RT02489',
      mailID: 'sharath@robosoftin.com'
    },
    {
      mode: 'Super Admin',
      name: 'Kevin',
      employeeCode: 'RT02001',
      mailID: 'kevin@robosoftin.com'
    },
    {
      mode: 'Super Admin',
      name: 'John Doe',
      employeeCode: 'RT05895',
      mailID: 'john@robosoftin.com'
    }

  ];

  constructor() { }

  getAdminList(): Admin[] {
    const adminList = [];
    this.admins.forEach(item => {
      if (item.mode === 'Admin') {
        adminList.push(item);
      }
    });
    return adminList;
  }

  getSuperAdminList(): Admin[] {
    const superAdminList = [];
    this.admins.forEach(item => {
      if (item.mode === 'Super Admin') {
        superAdminList.push(item);
      }
    });
    return superAdminList;
  }

  // Add Admin or Super Admin
  addNewUser(newUsers: Admin[]): void {
    newUsers.forEach(user => {
      if (!this.isExistingUser(user.employeeCode)) {
        this.admins.unshift(user);
      }
    });
  }

  // Remove Admin or Super Admin
  removeUser(user: Admin): void {
    this.admins.forEach((admin, index) => {
      if (admin.employeeCode === user.employeeCode) {
        this.admins.splice(index, 1);
      }
    });
  }

  // Check if Admin or Super Admin exist
  isExistingUser(code: string): boolean {
    return this.admins.findIndex(obj => obj.employeeCode === code) !== -1;
  }
}
