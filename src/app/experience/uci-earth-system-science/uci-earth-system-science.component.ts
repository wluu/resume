import { Component, OnInit } from '@angular/core';

import { ExperienceModel } from '../core/experience.model';

@Component({
  selector: 'at-uci-earth-system-science',
  templateUrl: './uci-earth-system-science.component.html',
  styleUrls: ['./uci-earth-system-science.component.css']
})
export class UciEarthSystemScienceComponent implements OnInit {

  uci: ExperienceModel;

  ngOnInit() {
    this.uci = {
      title: 'Student Programmer',
      company: 'UC Irvine\'s Earth System Science Department',
      date: {
        start: new Date(2008, 8),
        end: new Date(2008, 11)
      },
      location: 'Irvine, CA',
      responsibilities: [
        'Produced a Java program that uses the furthest neighbor algorithm to group different algae blooms based on statistical data sets.',
        'Created an internal website to give the Earth System scientists easy access to the Java program.'
      ]
    };
  }

}
