import { Component, OnInit } from '@angular/core';

import { ExperienceService, ExperienceModel } from '../core/experience.service';

@Component({
  selector: 'at-evidera',
  templateUrl: './evidera.component.html',
  styleUrls: ['./evidera.component.css']
})
export class EvideraComponent implements OnInit {

  evidera: ExperienceModel;

  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.evidera = this.experienceService.getEvideraExp();
  }

}
