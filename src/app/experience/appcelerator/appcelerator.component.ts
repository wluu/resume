import { Component, OnInit } from '@angular/core';

import { ExperienceService, ExperienceModel } from '../core/experience.service';

@Component({
  selector: 'at-appcelerator',
  templateUrl: './appcelerator.component.html',
  styleUrls: ['./appcelerator.component.css']
})
export class AppceleratorComponent implements OnInit {

  appcelerator: ExperienceModel;

  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.appcelerator = this.experienceService.getAppceleratorExp();
  }

}
