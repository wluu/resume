import { Component, OnInit } from '@angular/core';

import { ExperienceService } from '../core/experience.service';

@Component({
  selector: 'at-electionear',
  templateUrl: './electionear.component.html',
  styleUrls: ['./electionear.component.css']
})
export class ElectionearComponent implements OnInit {
  constructor(private expService: ExperienceService) { }

  ngOnInit() {
  }

}
