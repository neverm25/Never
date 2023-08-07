import { GradientIcons } from "@Global/Components/Icons";

export const LOCALE_SA = "en-za";
export const API_DATE_FORMAT = "MM/DD/YYYY";
export const DISPLAY_DATE_FORMAT = "MM/DD/YYYY";

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const monthsMap = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};
export const monthsShortName = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const monthsShortNameMap = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

//Inputs must be in MM/DD/YYYY format
const getFormattedDate = (inputDate: string) => {
  const [date, month, year] = inputDate.split("/");
  return `${year}/${month}/${date}`;
};
export const getDisplayDate = (inputDate: string) =>
  new Date(getFormattedDate(inputDate)).toLocaleDateString(LOCALE_SA);

export const getTimeStamp = (inputDate: string) =>
  new Date(getFormattedDate(inputDate)).getTime();

export type sortDirection = "asc" | "desc";
export const sortIcons = {
  asc: GradientIcons.SortAscIcon,
  desc: GradientIcons.SortDescIcon,
};
export type sortListProps = {
  data: unknown[];
  direction: sortDirection;
  dateFieldName: string;
};
export const sortListUsingDate = ({
  data,
  direction,
  dateFieldName,
}: sortListProps) => {
  if (direction === "asc") {
    return data.sort(
      (a, b) => getTimeStamp(a[dateFieldName]) - getTimeStamp(b[dateFieldName])
    );
  } else {
    return data.sort(
      (a, b) => getTimeStamp(b[dateFieldName]) - getTimeStamp(a[dateFieldName])
    );
  }
};

export const getCurrentYear = () => new Date().getFullYear();
export const getCurrentMonth = () => {
  const monthIndex = new Date().getMonth();
  return months[monthIndex];
};
export const getCurrentDate = () => new Date().getDay();

//#region Day Calculation
export const getMaxDayOfMonth = ({
  year = 1990,
  month = 0,
  isPast = false,
}) => {
  const today = new Date();

  const thisYear = today.getFullYear();
  const isCurrentYearSelected = year === thisYear;
  const thisMonth = today.getMonth();
  const isCurrentMonthSelected = month === thisMonth;

  if (isPast && isCurrentYearSelected && isCurrentMonthSelected)
    return today.getDate();

  const nextMonthFirstDate = new Date(year, (month + 1) % 12);
  nextMonthFirstDate.setDate(nextMonthFirstDate.getDate() - 1);
  return nextMonthFirstDate.getDate();
};
//#endregion

//#region Months calculation
export const getCurrentMonthIndex = () => {
  const monthIndex = new Date().getMonth();
  return monthIndex;
};
export const getPastMonths = ({ year = 1900 }: { year: number }) => {
  if (year < getCurrentYear()) return months;
  if (year > getCurrentYear()) return [];

  const monthsCopy = [...months];
  const currentMonth = getCurrentMonthIndex();
  const pastMonths = monthsCopy.slice(0, currentMonth + 1);
  return pastMonths;
};
export const getFutureMonths = ({ year = 2200 }: { year: number }) => {
  if (year > getCurrentYear()) return months;
  if (year < getCurrentYear()) return [];

  const monthsCopy = [...months];
  const currentMonth = getCurrentMonthIndex();
  return monthsCopy.slice(currentMonth);
};
export const getCurrentYearMonths = () => {
  const monthsCopy = [...months];
  const currentMonth = getCurrentMonthIndex();
  const currentYearMonths = monthsCopy.slice(0, currentMonth + 1);
  return currentYearMonths;
};
export const getAllMonths = () => months;
//#endregion

//Creating year options
type SelectOption = {
  label: string | number;
  value: string | number;
};
type getYearOptionsProps = {
  years: number;
  yearsOperation: "add" | "subtract";
};
export const getYearOptions = (props: getYearOptionsProps) => {
  const yearOptions: SelectOption[] = [];
  let maxYear = getCurrentYear();
  if (props.yearsOperation === "add") maxYear += props.years;
  if (props.yearsOperation === "subtract") maxYear -= props.years;

  for (let year = maxYear; year >= 1900; year--) {
    const yearOption: SelectOption = {
      label: year,
      value: year,
    };
    yearOptions.push(yearOption);
  }

  return yearOptions;
};

export const DateHelpers = {
  months,
  monthsMap,
  monthsShortName,
  monthsShortNameMap,
  getCurrentYear,
  getCurrentMonth,
  getCurrentDate,
  getYearOptions,
};
