export type DateFormat = "yyyy-mm-dd";

export const to2DigitsMonthString = (date: Date) => ("0" + (date.getMonth() + 1)).slice(-2);

export const to2DigitsDateString = (date: Date) => ("0" + date.getDate()).slice(-2);

export const toString = (date: Date, format: DateFormat): string => {
  let formattedDate: string;
  switch (format) {
    case "yyyy-mm-dd":
      formattedDate = `${date.getFullYear()}-${to2DigitsMonthString(date)}-${to2DigitsDateString(
        date,
      )}`;
      break;
    default:
      formattedDate = date.toLocaleDateString();
  }

  return formattedDate;
};
