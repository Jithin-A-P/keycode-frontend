export interface IDateRangeInputProps {
  maxDate: Date;
  minDate: Date;
  onSubmit: (start: Date, end: Date) => void;
  dateFilters: { startDate: Date; endDate: Date };
}
