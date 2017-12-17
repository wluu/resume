export class ExpModel {
  title: string;
  company: string;
  date: DateRange;
  resp: string[];
}

type DateRange = {
  start: DateUnit,
  end: DateUnit
}

type DateUnit = {
  month: string;
  year: string;
}
