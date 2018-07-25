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
      company: 'Allscripts',
      date: {
        start: new Date(2017, 6),
        end: new Date()
      },
      location: 'San Francisco, CA',
      responsibilities: [
        'Currently maintaining (and occasionally rewriting) the Protractor framework, ' +
        'which executes over 120 end-to-end web UI test cases.',
        'Perform daily QA responsibilities e.g. manual testing, ticket verification, and test case creation.'
      ]
    };
  }

}
