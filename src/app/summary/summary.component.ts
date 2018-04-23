import { Component, OnInit } from '@angular/core';

import { SummaryModel } from '../core/top-level.models';

@Component({
  selector: 'my-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  mySummary: SummaryModel;

  ngOnInit() {
    this.mySummary = {
      texts: [
        'Not afraid to learn and research new technologies to solve problems.',
        'Can quickly learn new programming languages that are needed for the task.',
        'Willing to teach those who need help with understanding new technical concepts and how a product works.'
      ]
    };
  }

}
