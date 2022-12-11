import { today, tomorrow, tomorrowDate, weekAheadDate } from "./datetime";

export const convertDayDisplay = (date) =>
  ((date) => {
    switch (date) {
      case today:
        return "Today";

      case tomorrow:
        return "Tomorrow";

      default:
        break;
    }

    const dateMs = new Date(date).getTime();

    if (dateMs > tomorrowDate && dateMs < weekAheadDate) {
      return `by ${new Date(dateMs).toLocaleString("en-US", {
        weekday: "long",
      })}`;
    }
    return date;
  })(date);
