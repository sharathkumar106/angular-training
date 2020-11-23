import { Admin } from './../../../models/admin.model';
import { AdminInfoService } from './../../../services/admin-info.service';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  userMode: string;
  adminList: Admin[];
  superAdminList: Admin[];

  newUser: Admin = {
    mode: '',
    name: '',
    employeeCode: '',
    mailID: ''
  };

  constructor(
    private dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private formBuilder: FormBuilder,
    private adminInfoService: AdminInfoService
  ) {
    this.userMode = data.userMode;
  }

  ngOnInit(): void {
    if (this.userMode === 'Admins') {
      this.loadAdminList();
    }

    if (this.userMode === 'Super Admins') {
      this.loadSuperAdminList();
    }
  }

  loadAdminList(): void {
    this.adminList = this.adminInfoService.getAdminList();
  }

  loadSuperAdminList(): void {
    this.superAdminList = this.adminInfoService.getSuperAdminList();
  }

  addNewAdmin(): void {
    const newAdmin = { ...this.newUser};
    newAdmin.mode = 'Admin';
    this.adminInfoService.addNewUser(newAdmin);
    this.loadAdminList();
  }

  addNewSuperAdmin(): void {
    const newAdmin = { ...this.newUser};
    newAdmin.mode = 'Super Admin';
    this.adminInfoService.addNewUser(newAdmin);
    this.loadSuperAdminList();
  }
}
