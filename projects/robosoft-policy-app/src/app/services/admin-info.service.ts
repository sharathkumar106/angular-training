import { Admin } from './../models/admin.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminInfoService {

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

  addNewUser(newUser: Admin): void {
    this.admins.unshift(newUser);
  }
}
