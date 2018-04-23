import { DateRange } from './date-range.interface';

// TODO: string or string array?
export interface SummaryModel {
  texts: string[];
}

export interface EducationModel {
  school: string;
  degree: string;
  major: string;
  minor: string;
  date: DateRange;
}

export interface SkillsModel {
  languages: string[];
  platforms: string[];
  databases: string[];
  operatingSystems: string[];
  testFrameworks: string[];
  otherTools: string[];
}
