import { todayDate, tomorrowDate, todayDateInMs, weekAheadDateInMs } from "./datetime";

const isTask = (type) => type === "Task";

export const convertDayDisplay = (date, type = "Task") =>
  ((date) => {
    switch (date) {
      case todayDate:
        return isTask(type) ? "Today" : "until Today";

      case tomorrowDate:
        return isTask(type) ? "Tomorrow" : "by Tomorrow";

      default:
        break;
    }

    const dateMs = new Date(date).getTime();

    if (dateMs > todayDateInMs && dateMs < weekAheadDateInMs) {
      const weekday = new Date(dateMs).toLocaleString("en-US", {
        weekday: "long",
      });

      return isTask(type) ? weekday : `by ${weekday}`;
    }

    return date;
  })(date);
