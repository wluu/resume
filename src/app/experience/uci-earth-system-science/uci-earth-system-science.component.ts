import { Component, OnInit } from '@angular/core';

import { ExperienceService, ExperienceModel } from '../core/experience.service';

@Component({
  selector: 'at-uci-earth-system-science',
  templateUrl: './uci-earth-system-science.component.html',
  styleUrls: ['./uci-earth-system-science.component.css']
})
export class UciEarthSystemScienceComponent implements OnInit {

  uci: ExperienceModel;

  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.uci = this.experienceService.getUciExp();
  }

}
