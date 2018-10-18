import { Component, OnInit } from '@angular/core';

import { ExperienceModel } from '../core/experience.model';

@Component({
  selector: 'at-evalytica',
  templateUrl: './evalytica.component.html',
  styleUrls: ['./evalytica.component.css']
})
export class EvalyticaComponent implements OnInit {

  evalytica: ExperienceModel;

  ngOnInit() {
    this.evalytica = {
      title: 'Senior Quality Engineer',
      company: 'Allscripts (with Evalytica)',
      date: {
        start: new Date(2017, 6),
        end: new Date(2018, 9)
      },
      location: 'San Francisco, CA',
      responsibilities: [
        'Maintained (and occasionally rewrote) the Protractor framework, ' +
        'which executed over 120 end-to-end web UI test cases.',
        'Performed daily QA responsibilities e.g. manual testing, ticket verification, and test case creation.'
      ]
    };
  }

}
