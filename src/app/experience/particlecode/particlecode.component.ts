import { Component, OnInit } from '@angular/core';

import { ExperienceService, ExperienceModel } from '../core/experience.service';

@Component({
  selector: 'at-particlecode',
  templateUrl: './particlecode.component.html',
  styleUrls: ['./particlecode.component.css']
})
export class ParticlecodeComponent implements OnInit {

  particlecode: ExperienceModel;

  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.particlecode = this.experienceService.getParicleCodeExp();
  }

}
