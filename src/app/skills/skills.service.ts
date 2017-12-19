import { Injectable } from '@angular/core';

export interface SkillsModel {
  languages: string[];
  platforms: string[];
  databases: string[];
  oses: string[];
  otherTools: string[];
}

// TODO: finish reading up on NgModule before putting this service in its own module
@Injectable()
export class SkillsService {
  getSkills(): SkillsModel {
    // TODO: fill this out
    return null;
  }
}
