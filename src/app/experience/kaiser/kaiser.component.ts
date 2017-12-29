import { Component, OnInit } from '@angular/core';

import { ExperienceService, ExperienceModel } from '../core/experience.service';

@Component({
  selector: 'at-kaiser',
  templateUrl: './kaiser.component.html',
  styleUrls: ['./kaiser.component.css']
})
export class KaiserComponent implements OnInit {

  kaiser: ExperienceModel;

  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.kaiser = this.experienceService.getKaiserExp();
  }

}
