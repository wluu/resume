import { Component, OnInit } from '@angular/core';

import { TopLevelService, SummaryModel } from '../core/top-level.service';

@Component({
  selector: 'my-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  mySummary: SummaryModel;

  constructor(private topLevelService: TopLevelService) { }

  ngOnInit() {
    this.mySummary = this.topLevelService.getSummary();
  }

}
