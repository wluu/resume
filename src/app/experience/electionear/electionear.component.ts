import { Component, OnInit } from '@angular/core';

import { ExperienceModel } from '../core/experience.model';

@Component({
  selector: 'at-electionear',
  templateUrl: './electionear.component.html',
  styleUrls: ['./electionear.component.css']
})
export class ElectionearComponent implements OnInit {

  electionear: ExperienceModel;

  ngOnInit() {
    this.electionear = {
      title: 'Software Engineer',
      company: 'Electionear Inc.',
      date: {
        start: new Date(2010, 9),
        end: new Date(2011, 4)
      },
      location: 'Mountain View, CA',
      responsibilities: [
        'Worked on a team of 3 to develop an Android App to replace traditional phone banking and canvassing in the political space.',
        'Collaborated closely with the CEO on storyboards, algorithm designs, and process models.',
        'Designed process models and storyboards to conceptualize technical features for product release.',
        'Implemented critical components on the Android app such as QNA logic, save answers feature, and save map pins feature.'
      ]
    };
  }

}
