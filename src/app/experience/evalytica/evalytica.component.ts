import { Component, OnInit } from '@angular/core';

import { ExperienceService, ExperienceModel } from '../core/experience.service';

@Component({
  selector: 'at-evalytica',
  templateUrl: './evalytica.component.html',
  styleUrls: ['./evalytica.component.css']
})
export class EvalyticaComponent implements OnInit {

  evalytica: ExperienceModel;

  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.evalytica = this.experienceService.getEvideraExp();
  }

}
