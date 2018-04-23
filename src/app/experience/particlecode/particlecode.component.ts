import { Component, OnInit } from '@angular/core';

import { ExperienceModel } from '../core/experience.model';

@Component({
  selector: 'at-particlecode',
  templateUrl: './particlecode.component.html',
  styleUrls: ['./particlecode.component.css']
})
export class ParticlecodeComponent implements OnInit {

  particlecode: ExperienceModel;

  ngOnInit() {
    this.particlecode = {
      title: 'Quality Engineer',
      company: 'ParticleCode (acquired by Appcelerator)',
      date: {
        start: new Date(2011, 7),
        end: new Date(2011, 9)
      },
      location: 'Palo Alto, CA',
      responsibilities: [
        'Took over an existing automation test suite and refactored it.',
        'Maintained sample apps that showcased ParticleCode\'s cross-platform game engine.',
        'Updated and added test cases to existing test plans.'
      ]
    };
  }

}
