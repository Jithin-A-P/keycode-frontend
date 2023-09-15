import React from 'react';

export type DatePickerProps = {
  currentDateChangeRef?: React.MutableRefObject<{
    startDate: Date | null;
    endDate: Date | null;
  }>;
  defaultEndDate: Date | null;
  defaultStartDate: Date | null;
  isDateRangePicker?: boolean;
  maxDate: Date;
  minDate: Date;
  onSubmit?: (start: Date, end: Date) => void;
  submitBtnStyle?: string;
};

export type CustomHeaderProps = {
  changeMonth: (value: number) => void;
  changeYear: (value: number) => void;
  date: Date;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  nextMonthButtonDisabled: boolean;
  prevMonthButtonDisabled: boolean;
};
