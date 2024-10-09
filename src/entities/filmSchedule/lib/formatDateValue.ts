const WEEKDAYS = {
  "0": "Вс",
  "1": "Пн",
  "2": "Вт",
  "3": "Ср",
  "4": "Чт",
  "5": "Пт",
  "6": "Сб",
};

const MONTHS = {
  "0": "янв",
  "1": "фев",
  "2": "мар",
  "3": "апр",
  "4": "май",
  "5": "июн",
  "6": "июл",
  "7": "авг",
  "8": "сен",
  "9": "окт",
  "10": "ноя",
  "11": "дек",
};

type DaysNumber = keyof typeof WEEKDAYS;
type MonthsNumber = keyof typeof MONTHS;

export const formatDateValue = (value: string): string => {
  const currentDate = formatCurrentDate(value);

  const date = new Date(currentDate);
  const dayNumber = String(date.getDay()) as DaysNumber;
  const monthNumber = String(date.getMonth()) as MonthsNumber;

  const monthDay = String(date.getDate());
  const weekday = WEEKDAYS[dayNumber];
  const month = MONTHS[monthNumber];

  return `${weekday}, ${monthDay} ${month}`;
};

const formatCurrentDate = (date: string): string => {
  const dateLst = date.split(".");
  const [day, month, year] = dateLst;

  const currentDate = `20${year}/${month}/${day}`;

  return currentDate;
};
