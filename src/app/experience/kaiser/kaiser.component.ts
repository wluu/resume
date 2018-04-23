import { Component, OnInit } from '@angular/core';

import { ExperienceModel } from '../core/experience.model';

@Component({
  selector: 'at-kaiser',
  templateUrl: './kaiser.component.html',
  styleUrls: ['./kaiser.component.css']
})
export class KaiserComponent implements OnInit {

  kaiser: ExperienceModel;

  ngOnInit() {
    this.kaiser = {
      title: 'Program Analyst',
      company: 'Kaiser Permanente',
      date: {
        start: new Date(2009, 7),
        end: new Date(2010, 7)
      },
      location: 'Pasadena, CA',
      responsibilities: [
        'Developed and debugged PeopleSoft modules for payroll and human resource department using PeopleCode.',
        'Created and modified payroll\'s financial reports utilizing SQR.',
        'Documented technical requirements and modifications for different PeopleSoft modules.'
      ]
    };
  }

}
