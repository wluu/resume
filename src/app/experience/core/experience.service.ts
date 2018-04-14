import { Injectable } from '@angular/core';

import { DateRange } from '../../core/date-range.interface';

export interface ExperienceModel {
  title: string;
  company: string;
  date: DateRange;
  location: string;
  responsibilities: string[];
}

@Injectable()
export class ExperienceService {

  getEvideraExp(): ExperienceModel {
    return {
      title: 'Senior Quality Engineer',
      company: 'Evalytica (acquired by Allscripts)',
      date: {
        start: new Date(2017, 6),
        end: new Date()
      },
      location: 'San Francisco, CA',
      responsibilities: [
        'Currently maintaining (and occasionally rewriting) the Protractor framework, ' +
        'which executes over 100 end-to-end web UI test cases.',
        'Perform daily QA responsibilities e.g. manual testing, ticket verification, and test case creation.'
      ]
    };
  }

  getAppceleratorExp(): ExperienceModel {
    return {
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

  getParicleCodeExp(): ExperienceModel {
    return {
      title: 'Quality Engineer',
      company: 'ParticleCode (acquired by Appcelerator)',
      date: {
        start: new Date(2011, 7),
        end: new Date(2011, 9)
      },
      location: 'Palo Alto, CA',
      responsibilities: [
        'Took over an existing automation test suite and refactored it.',
        'Maintained sample apps that showcased ParticleCode\'s cross-platform game engine.',
        'Updated and added test cases to existing test plans.'
      ]
    };
  }

  getElectionearExp(): ExperienceModel {
    return {
      title: 'Software Engineer',
      company: 'Electionear Inc.',
      date: {
        start: new Date(2010, 9),
        end: new Date(2011, 4)
      },
      location: 'Mountain View, CA',
      responsibilities: [
        'Worked on a team of 3 to develop an Android App to replace traditional phone banking and canvassing in the political space.',
        'Collaborated closely with the CEO on storyboards, algorithm designs, and process models.',
        'Designed process models and storyboards to conceptualize technical features for product release.',
        'Implemented critical components on the Android app such as QNA logic, save answers feature, and save map pins feature.'
      ]
    };
  }

  getKaiserExp(): ExperienceModel {
    return {
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

  getUciExp(): ExperienceModel {
    return {
      title: 'Student Programmer',
      company: 'UC Irvine\'s Earth System Science Department',
      date: {
        start: new Date(2008, 8),
        end: new Date(2008, 11)
      },
      location: 'Irvine, CA',
      responsibilities: [
        'Produced a Java program that uses the furthest neighbor algorithm to group different algae blooms based on statistical data sets.',
        'Created an internal website to give the Earth System scientists easy access to the Java program.'
      ]
    };
  }

}
