import { Component, OnInit } from '@angular/core';

import { ExperienceService, ExperienceModel } from '../core/experience.service';

@Component({
  selector: 'at-electionear',
  templateUrl: './electionear.component.html',
  styleUrls: ['./electionear.component.css']
})
export class ElectionearComponent implements OnInit {

  electionear: ExperienceModel;

  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.electionear = this.experienceService.getElectionearExp();
  }

}
