import { DateRange } from '../../core/date-range.interface';

export interface ExperienceModel {
  title: string;
  company: string;
  date: DateRange;
  location: string;
  responsibilities: string[];
}
