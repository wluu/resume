export interface DateRange {
  start: DateUnit;
  end: DateUnit;
}

interface DateUnit {
  // TODO: there might be a way to enforce the month format with the pipes i.e. Sept or September
  month: string;
  year: string;
}
