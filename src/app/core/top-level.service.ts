import { Injectable } from '@angular/core';

import { DateRange } from './date-range.interface';

// TODO: string or string array?
export interface SummaryModel {
  summary: string[];
}

export interface EducationModel {
  school: string;
  degree: string;
  major: string;
  minor: string;
  date: DateRange;
}

export interface SkillsModel {
  languages: string[];
  platforms: string[];
  databases: string[];
  oses: string[];
  testFrameworks: string[];
  otherTools: string[];
}

@Injectable()
export class TopLevelService {

  getSummary(): SummaryModel {
    return {
      summary: [
        'Not afraid to learn and research new technologies to solve problems.',
        'Can quickly learn new programming languages that are needed for the task.',
        'Willing to teach those who need help with understanding new technical concepts and how a product works.'
      ]
    };
  }

  getEducation(): EducationModel {
    return {
      school: 'University of California, Irvine',
      degree: 'Bachelor of Science',
      major: 'Computer Science',
      minor: 'Mathematics',
      date: {
        start: { month: 'Sep', year: '2005' },
        end: { month: 'Jun', year: '2009' }
      }
    };
  }

  getSkills(): SkillsModel {
    return {
      languages: ['TypeScript', 'JavaScript', 'Shell'],
      platforms: ['Angular', 'NodeJS', 'Android', 'iOS'],
      databases: ['MySql', 'MongoDb'],
      oses: ['macOS', 'Windows', 'Ubuntu'],
      testFrameworks: ['Protractor', 'mochaJS'],
      otherTools: ['Git', 'Jira']
    };
  }

}
