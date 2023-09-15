import React, { useRef, useState } from 'react';

import { Calendar } from '@icons';
import { getFormattedDates } from '@utils/date';
import { useClickOutside } from '@hooks';
import { preventDefaultEvents } from '@utils/generics';

import DatePicker from '../date-picker/DatePicker';
import ClearButton from '../clear-button/ClearButton';

import { IDateRangeInputProps } from './types';

const DateRangeInput: React.FC<IDateRangeInputProps> = (props) => {
  const { maxDate, minDate, onSubmit, dateFilters } = props;
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside({
    ref: containerRef,
    handler: () => setIsDatePickerVisible(false),
  });

  const handleSubmit = (start: Date, end: Date) => {
    onSubmit(start, end);
    setIsDatePickerVisible(false);
  };

  const toggleDatePickerVisibility = () =>
    setIsDatePickerVisible((prev) => !prev);

  const clearSelectedItems = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    preventDefaultEvents(e);
    onSubmit(null, null);
  };

  const formattedDates = getFormattedDates(dateFilters, 'DD/MM/YYYY');
  const isDateSelected = dateFilters.startDate && dateFilters.endDate;

  return (
    <div
      className='flex items-center bg-white border border-gray-400 rounded-lg pl-3 h-full'
      ref={containerRef}
      role='presentation'
      onClick={toggleDatePickerVisibility}
    >
      <div className='relative w-full'>
        <div className='flex justify-between w-full'>
          <div className='flex gap-2 items-center text-jaguar'>
            <Calendar className='w-4' />{' '}
            {isDateSelected ? (
              <span className='text-sm'>
                {formattedDates.startDate} - {formattedDates.endDate}
              </span>
            ) : (
              <span className='text-sm border border-white select-none'>
                Select Date Range
              </span>
            )}
          </div>
          {isDateSelected && <ClearButton onClear={clearSelectedItems} />}
        </div>

        {isDatePickerVisible && (
          <div
            className='prevent-select absolute top-10 -left-2 z-2 bg-white p-3 border border-gray-400 rounded-lg'
            role='presentation'
            onClick={preventDefaultEvents}
          >
            <DatePicker
              defaultEndDate={dateFilters.endDate}
              defaultStartDate={dateFilters.startDate}
              maxDate={maxDate}
              minDate={minDate}
              onSubmit={handleSubmit}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DateRangeInput;
