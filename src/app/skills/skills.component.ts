import { Component, OnInit } from '@angular/core';

import { SkillsModel } from '../core/top-level.models';

@Component({
  selector: 'my-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  mySkills: SkillsModel;

  ngOnInit() {
    this.mySkills = {
      languages: ['TypeScript', 'JavaScript', 'Shell'],
      platforms: ['Node.js', 'Angular', 'Android', 'iOS'],
      databases: ['MySql', 'MongoDb', 'PostgresSQL'],
      operatingSystems: ['macOS', 'Windows', 'Ubuntu'],
      testFrameworks: ['Mocha', 'Jasmine', 'Protractor', 'Selenium'],
      otherTools: ['Git', 'Jira']
    };
  }

}
