import { Component, OnInit } from '@angular/core';

import { EducationModel } from '../core/top-level.models';

@Component({
  selector: 'my-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  myEducation: EducationModel;

  ngOnInit() {
    this.myEducation = {
      school: 'University of California, Irvine',
      degree: 'B.S.',
      major: 'Computer Science',
      minor: 'Mathematics',
      date: {
        start: new Date(2005, 8),
        end: new Date(2009, 5)
      }
    };
  }

}
