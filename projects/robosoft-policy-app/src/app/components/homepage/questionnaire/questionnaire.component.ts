import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Forms } from './../../../models/forms.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  minDate: Date;
  maxDate: Date;

  formData: Forms = {
    Title: '',
    Description: 'These Guidelines helps you to code in a secure manner which would assist in keeping the product data safe',
    ButtonTitle: 'I Accept',
    ButtonText: 'I have read the guidelines',
    CheckBoxText: 'I have read the guidelines',
    StartDate: new Date(2020, 0, 1),
    EndDate: new Date(2021, 0, 1),
    AutoReminder: 5,
    ContentPPT: undefined,
    ParticipantsList: undefined,
    MailBody: 'Hello <Name> You are hear-by invited to read and accept the terms and conditions by clicking on the following link <link>'
  };

  formSubmitted = false;
  dataSaved = false;

  MainQuestionnaire: FormGroup;
  AdditionalQuestionnaire: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.setDateConstraints();
  }

  ngOnInit(): void {
    this.MainQuestionnaire = this.formBuilder.group({
      Title: [this.formData.Title, Validators.required],
      Description: [this.formData.Description, Validators.required],
      ButtonTitle: [this.formData.ButtonTitle, Validators.required],
      ButtonText: [this.formData.ButtonText, Validators.required],
      CheckBoxText: [this.formData.CheckBoxText, Validators.required],
    });
    this.AdditionalQuestionnaire = this.formBuilder.group({
      StartDate: [this.formData.StartDate, Validators.required],
      EndDate: [this.formData.EndDate, Validators.required],
      AutoReminder: [this.formData.AutoReminder, Validators.required],
      ContentPPT: [this.formData.ContentPPT, Validators.required],
      ParticipantsList: [this.formData.ParticipantsList, Validators.required],
      MailBody: [this.formData.MailBody, Validators.required]
    });
  }

  public get MainForm(): any {
    return this.MainQuestionnaire.controls;
  }

  public get AdditionalForm(): any {
    return this.AdditionalQuestionnaire.controls;
  }

  // Set the minimum to January 1st 20 years in the past and December 31st 10 years in the future.
  setDateConstraints(): void {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 10, 11, 31);
  }

  onSave(): void {
    this.formSubmitted = true;
    if (this.MainQuestionnaire.invalid || this.AdditionalQuestionnaire.invalid) {
      console.log('Please fill all the fields!');
    } else {
      this.formData.ContentPPT = this.AdditionalForm.ContentPPT.value || '';
      this.formData.ParticipantsList = this.AdditionalForm.ParticipantsList.value || '';
      this.dataSaved = true;
      console.log(this.formData);
    }
  }

}
