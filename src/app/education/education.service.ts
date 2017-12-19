import { Injectable } from '@angular/core';

export interface EducationModel {
  school: string;
  degree: string;
  major: string;
  minor: string;
  date: DateRange;
}

interface DateRange {
  start: DateUnit;
  end: DateUnit;
}

interface DateUnit {
  year: string;
}

// TODO: finish reading up on NgModule before putting this service in its own module
@Injectable()
export class EducationService {
  getEducation(): EducationModel {
    // TODO: fill this out
    return null;
  }
}
