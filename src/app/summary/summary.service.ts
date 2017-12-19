import { Injectable } from '@angular/core';

// TODO: string or string array?
export interface SummaryModel {
  summary: string[];
}

// TODO: finish reading up on NgModule before putting this service in its own module
@Injectable()
export class SummaryService {
  getSummary(): SummaryModel {
    // TODO: fill this out
    return null;
  }
}
