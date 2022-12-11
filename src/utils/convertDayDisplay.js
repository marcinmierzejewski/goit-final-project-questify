import { today, tomorrow, tomorrowDate, weekAheadDate } from "./datetime";

export const convertDayDisplay = (date, type = "Task") =>
  ((date) => {
    switch (date) {
      case today:
        return type === "Task" ? "Today" : "until Today";

      case tomorrow:
        return type === "Task" ? "Tomorrow" : "by Tomorrow";

      default:
        break;
    }

    const dateMs = new Date(date).getTime();

    if (dateMs > tomorrowDate && dateMs < weekAheadDate) {
      const weekday = new Date(dateMs).toLocaleString("en-US", {
        weekday: "long",
      });

      return type === "Task" ? weekday : `by ${weekday}`;
    }

    return date;
  })(date);
