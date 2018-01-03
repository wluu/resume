import { Component, OnInit } from '@angular/core';

import { TopLevelService, SkillsModel } from '../core/top-level.service';

@Component({
  selector: 'my-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  mySkills: SkillsModel;

  constructor(private topLevelService: TopLevelService) { }

  ngOnInit() {
    this.mySkills = this.topLevelService.getSkills();
  }

}
