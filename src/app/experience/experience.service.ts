import { Injectable } from '@angular/core';

export interface ExperienceModel {
  title: string;
  company: string;
  date: DateRange;
  responsibilities: string[];
}

interface DateRange {
  start: DateUnit;
  end: DateUnit;
}

interface DateUnit {
  month: string;
  year: string;
}

// TODO: finish reading up on NgModule before putting this service in its own module
@Injectable()
export class ExperienceService {
  getEvideraExp(): ExperienceModel {
    // TODO: fill this out
    return null;
  }

  getAppceleratorExp(): ExperienceModel {
    // TODO: fill this out
    return null;
  }

  getElectionearExp(): ExperienceModel {
    // TODO: fill this out
    return null;
  }

  getParicleCodeExp(): ExperienceModel {
    // TODO: fill this out
    return null;
  }

  getKaiserExp(): ExperienceModel {
    // TODO: fill this out
    return null;
  }

  getUciExp(): ExperienceModel {
    // TODO: fill this out
    return null;
  }
}
