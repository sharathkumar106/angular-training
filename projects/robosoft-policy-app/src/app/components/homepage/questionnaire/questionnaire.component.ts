import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  minDate: Date;
  maxDate: Date;
  constructor() {
    this.setDateConstraints();
  }

  ngOnInit(): void {
  }

  // Set the minimum to January 1st 20 years in the past and December 31st 10 years in the future.
  setDateConstraints(): void {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 10, 11, 31);
  }

}
