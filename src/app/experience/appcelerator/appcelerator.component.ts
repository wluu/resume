import { Component, OnInit } from '@angular/core';

import { ExperienceModel } from '../core/experience.model';

@Component({
  selector: 'at-appcelerator',
  templateUrl: './appcelerator.component.html',
  styleUrls: ['./appcelerator.component.css']
})
export class AppceleratorComponent implements OnInit {

  appcelerator: ExperienceModel;

  ngOnInit() {
    this.appcelerator = {
      title: 'Senior Quality Engineer',
      company: 'Appcelerator (acquired by Axway)',
      date: {
        start: new Date(2011, 9),
        end: new Date(2017, 5)
      },
      location: 'San Jose, CA',
      responsibilities: [
        'Created internal automation frameworks for mobile UI testing and CLI testing.',
        'Created a bot (in NodeJS) that detects and reports new versions in our product stack (e.g. Titanium SDK, Appc CLI), run smoke ' +
        'tests against the new versions, and send the test results to an Arrow (Appcelerator’s cloud product) app.',
        'Created an automated test framework (with Mocha) that tests 16 APIs for each critical Arrow Connector provided by Appcelerator; ' +
        '6 in total.',
        'Created 3 automated test frameworks leveraging Titanium SDK and APS (Appcelerator Platform Service) SDK (for iOS and Android) ' +
        'that would make CRUD calls to ArrowDb.',
        'Technical lead for several products: iOS platform, Appcelerator Cloud Service, APS SDK, and Arrow.',
        'Created test plan and test cases for each product I was a technical lead on.',
        'Trained interns and new hires on the product stack.'
      ]
    };
  }

}
