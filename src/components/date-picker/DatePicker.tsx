import React, { FC, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import {
  checkForInvalidCharactersInDate,
  formatStringToDate,
  getFormattedDate,
  isValidDate,
} from '@utils/date';
import { getRange } from '@utils/numbers';
import { SelectArrow } from '@icons';

import Button from '../button/Button';

import { CustomHeaderProps, DatePickerProps } from './types';
import './styles.css';

const months: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const DatePickerComponent: FC<DatePickerProps> = (props) => {
  const {
    currentDateChangeRef,
    defaultEndDate,
    defaultStartDate,
    isDateRangePicker = true,
    maxDate,
    minDate,
    onSubmit,
    submitBtnStyle,
  } = props;

  const [startDate, setStartDate] = useState<Date | null>(
    defaultStartDate || null
  );
  const [endDate, setEndDate] = useState<Date | null>(defaultEndDate || null);
  const [formattedStartDate, setFormattedStartDate] = useState<string>(
    (defaultStartDate && getFormattedDate(defaultStartDate)) || ''
  );
  const [formattedEndDate, setFormattedEndDate] = useState<string>(
    (defaultEndDate && getFormattedDate(defaultEndDate)) || ''
  );
  const [showInvalidError, setShowInvalidError] = useState<boolean>(false);

  useEffect(() => {
    if (currentDateChangeRef)
      currentDateChangeRef.current = {
        startDate: startDate || null,
        endDate: endDate || null,
      };
  }, [startDate, endDate, currentDateChangeRef]);

  const years = getRange(minDate.getFullYear(), maxDate.getFullYear());

  const clearStates = () => {
    setStartDate(null);
    setEndDate(null);
    setFormattedStartDate('');
    setFormattedEndDate('');
  };

  const onChange = (dates: Date | [Date | null, Date | null] | null) => {
    setShowInvalidError(false);
    clearStates();
    if (isDateRangePicker && Array.isArray(dates)) {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
      if (start) setFormattedStartDate(getFormattedDate(start));
      if (end) setFormattedEndDate(getFormattedDate(end));
    }
  };

  const handleChangeStartDate = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setShowInvalidError(false);
    setFormattedStartDate(value);
    if (
      checkForInvalidCharactersInDate(value) ||
      (endDate && endDate < formatStringToDate(value))
    ) {
      setShowInvalidError(true);
      setStartDate(null);
    }
    if (isValidDate(value)) setStartDate(formatStringToDate(value));
  };

  const handleChangeEndDate = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setShowInvalidError(false);
    setFormattedEndDate(value);
    if (
      checkForInvalidCharactersInDate(value) ||
      (startDate && startDate > formatStringToDate(value))
    ) {
      setShowInvalidError(true);
      setEndDate(null);
    }
    if (isValidDate(value)) setEndDate(formatStringToDate(value));
  };

  const handleSubmitClick = () => {
    if (startDate && endDate && onSubmit) onSubmit(startDate, endDate);
    // setStartDate(null);
    // setEndDate(null);
  };

  const disableSubmitButton =
    checkForInvalidCharactersInDate(formattedStartDate) ||
    !isValidDate(formattedStartDate) ||
    (isDateRangePicker &&
      (checkForInvalidCharactersInDate(formattedEndDate) ||
        !isValidDate(formattedEndDate))) ||
    showInvalidError;

  useEffect(() => {
    document?.getElementById('date-picker-start-date')?.focus();
    if (isValidDate(formattedStartDate))
      document?.getElementById('date-picker-end-date')?.focus();
  }, [formattedStartDate]);

  const customHeader = ({
    date,
    changeYear,
    changeMonth,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  }: CustomHeaderProps) => {
    const handleDecreaseMonth = () => {
      if (!prevMonthButtonDisabled) decreaseMonth();
    };
    const handleIncreaseMonth = () => {
      if (!nextMonthButtonDisabled) increaseMonth();
    };
    return (
      <div className='flex'>
        <div className='flex justify-between items-center px-1 mb-2 w-full'>
          <div className='font-body flex items-center font-medium'>
            <div className='mr-2 text-sm min-w-[73px]'>
              {months[date?.getMonth()]}
            </div>
            <select
              value={date?.getFullYear()}
              onChange={({ target: { value } }) => {
                changeYear(value as unknown as number);
                changeMonth(0);
              }}
              className='text-sm'
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className='flex'>
            <SelectArrow
              onClick={handleDecreaseMonth}
              className='w-3 rotate-90 cursor-pointer'
            />
            <SelectArrow
              onClick={handleIncreaseMonth}
              className='w-3 -rotate-90 cursor-pointer'
            />
          </div>
        </div>
      </div>
    );
  };

  const renderDate = (label: string, value) => (
    <div>
      <p className='opacity-60 text-xs'>{label}</p>
      <input
        id='date-picker-start-date'
        className={`border-0.5px mt-2 ${
          showInvalidError
            ? 'border-red-500'
            : 'border-grey02  focus:border-black'
        } placeholder:text-grey01 h-3 w-28 rounded-md outline-none`}
        placeholder='DD/MM/YYYY'
        value={value || ''}
        // onChange={handleChangeStartDate}
      />
    </div>
  );

  return (
    <div className='rounded-10px w-min bg-white'>
      <div className='gap-10px flex pb-1 text-sm'>
        {renderDate('From', formattedStartDate)}
        {isDateRangePicker && renderDate('To', formattedEndDate)}
      </div>
      <DatePicker
        selected={startDate}
        disabledKeyboardNavigation
        startDate={startDate}
        endDate={endDate}
        minDate={minDate}
        maxDate={maxDate}
        onChange={onChange}
        inline
        dateFormat='dd/MM/yyy'
        open
        calendarStartDay={1}
        selectsRange={isDateRangePicker}
        showPopperArrow={false}
        renderCustomHeader={customHeader}
      />
      {onSubmit && (
        <Button
          handleButtonClick={handleSubmitClick}
          btnClass={`ml-auto mr-1 mt-2 rounded-md bg-jaguar
          px-5 py-2 text-base text-snow ${submitBtnStyle}`}
          disabled={disableSubmitButton}
          disabledStyle='ml-auto bg-gray-500 py-2 px-5 mt-2 mr-1 rounded-md text-snow text-base leading-normal'
          label='Done'
        />
      )}
    </div>
  );
};

export default DatePickerComponent;
