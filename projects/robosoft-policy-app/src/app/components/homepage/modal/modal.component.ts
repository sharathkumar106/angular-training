import { Admin } from './../../../models/admin.model';
import { AdminInfoService } from './../../../services/admin-info.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  userMode: string;
  adminList: Admin[];
  superAdminList: Admin[];
  deletedUsersList: Admin[] = [];

  newUser: Admin = {
    mode: '',
    name: '',
    employeeCode: '',
    mailID: ''
  };

  isEditable: boolean[];
  updateSuccess: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private adminInfoService: AdminInfoService
  ) {
    this.userMode = data.userMode;
  }

  ngOnInit(): void {
    if (this.userMode === 'Admins') {
      this.loadAdminList();
      this.isEditable = new Array(this.adminList.length).fill(false);

    }

    if (this.userMode === 'Super Admins') {
      this.loadSuperAdminList();
      this.isEditable = new Array(this.superAdminList.length).fill(false);
    }
  }

  loadAdminList(): void {
    this.adminList = this.adminInfoService.getAdminList();
  }

  loadSuperAdminList(): void {
    this.superAdminList = this.adminInfoService.getSuperAdminList();
  }

  addNewAdmin(): void {
    const newUser = { ...this.newUser };
    newUser.mode = 'Admin';
    this.adminList.unshift(newUser);
  }

  addNewSuperAdmin(): void {
    const newUser = { ...this.newUser };
    newUser.mode = 'Super Admin';
    this.superAdminList.unshift(newUser);
  }

  editUser(index: number): void {
    this.isEditable[index] = !this.isEditable[index];
  }

  deleteUser(code: string): void {
    if (this.userMode === 'Admins') {
      this.adminList.forEach((user, index) => {
        if (user.employeeCode === code) {
          this.adminList.splice(index, 1);
          this.deletedUsersList.push(user);
        }
      });
    } else {
      this.superAdminList.forEach((user, index) => {
        if (user.employeeCode === code) {
          this.superAdminList.splice(index, 1);
          this.deletedUsersList.push(user);
        }
      });
    }
  }

  updateUsersList(): void {
    if (this.userMode === 'Admins') {
      this.adminInfoService.addNewUser(this.adminList);
    } else if (this.userMode === 'Super Admins') {
      this.adminInfoService.addNewUser(this.superAdminList);
    }
    this.deletedUsersList.forEach(user => {
      this.adminInfoService.removeUser(user);
    });
    this.updateSuccess = true;
  }
}
