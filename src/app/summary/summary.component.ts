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
        'Experience automating in the web, mobile, and backend space.',
        'Enjoy learning new programming languages and tools to help better the product.',
        'Can lead a team and react accordingly when critical issues show up in production.',
        'Will teach those who need help with understanding new technical concepts and how a product works.'
      ]
    };
  }

}
