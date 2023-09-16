/* eslint-disable no-nested-ternary */
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import duration from 'dayjs/plugin/duration';

const DEFAULT_VALUE = '-';

dayjs.extend(advancedFormat);
dayjs.extend(duration);

const getFormattedDate = (
  date: Date | string,
  dateFormat = 'DD MMM YYYY'
): string => dayjs(date)?.format(dateFormat);

const formatStringToDate = (date: string): Date => {
  // eslint-disable-next-line no-unsafe-optional-chaining
  const [day, month, year] = date?.split('/');
  return new Date(
    year as unknown as number,
    (month as unknown as number) - 1,
    day as unknown as number
  );
};

const isValidDate = (dateStr: string) => {
  if (!dateStr) return false;
  const regex = /^\d{2}\/\d{2}\/\d{4}$/;

  if (dateStr?.match(regex) === null) {
    return false;
  }

  // eslint-disable-next-line no-unsafe-optional-chaining
  const [day, month, year] = dateStr?.split('/');

  const isoFormattedStr = `${year}-${month}-${day}`;

  const date = new Date(isoFormattedStr);

  const timestamp = date.getTime();

  if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
    return false;
  }

  return date.toISOString().startsWith(isoFormattedStr);
};

const checkForInvalidCharactersInDate = (dateStr: string): boolean => {
  const numberAndSlashOnlyRegex = /[^0-9\\/]/;
  const dateFormatRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!dateStr) return false;
  if (numberAndSlashOnlyRegex.test(dateStr)) return true;
  if (dateStr?.length < 10) return false;

  if (dateStr?.length >= 10 && !dateFormatRegex.test(dateStr)) {
    return true;
  }

  // eslint-disable-next-line no-unsafe-optional-chaining
  const [day, month, year] = dateStr?.split('/');

  const isoFormattedStr = `${year}-${month}-${day}`;

  const date = new Date(isoFormattedStr);

  const timestamp = date.getTime();

  if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
    return true;
  }

  return !date.toISOString().startsWith(isoFormattedStr);
};

const getFormattedDates = (
  dates: { startDate: Date; endDate: Date },
  format = 'YYYY-MM-DD'
) => ({
  startDate: getFormattedDate(dates.startDate?.toISOString(), format),
  endDate: getFormattedDate(dates.endDate?.toISOString(), format),
});

const convertMinutesToTime = (totalMinutes: number) => {
  let hours = Math.floor(totalMinutes / 60);
  const remainingMins = totalMinutes % 60;
  const isMorning = hours < 12;
  if (!isMorning) hours -= 12;
  if (hours === 0) hours = 12;

  const paddedHour = hours.toLocaleString('en-US', { minimumIntegerDigits: 2 });
  const paddedMins = remainingMins.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
  });

  const time =
    hours >= 0 && remainingMins
      ? `${paddedHour}:${paddedMins} ${isMorning ? 'am' : 'pm'}`
      : DEFAULT_VALUE;
  return time;
};

export {
  checkForInvalidCharactersInDate,
  convertMinutesToTime,
  formatStringToDate,
  getFormattedDate,
  getFormattedDates,
  isValidDate,
};
