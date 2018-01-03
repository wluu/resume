import { Component, OnInit } from '@angular/core';

import { TopLevelService, EducationModel } from '../core/top-level.service';

@Component({
  selector: 'my-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  myEducation: EducationModel;

  constructor(private topLevelService: TopLevelService) { }

  ngOnInit() {
    this.myEducation = this.topLevelService.getEducation();
  }

}
