export const separateTime = (date) => {
  let hour = date.get("hour");
  let minutes = date.get("minute");

  if (hour < 10) hour = "0" + hour;
  if (minutes < 10) minutes = "0" + minutes;
  const time = hour + ":" + minutes;
  return time;
};

export const separateDate = (date) => {
  const year = date.get("year");
  let month = date.get("month") + 1;
  let dayOfMonth = date.get("date");

  if (month < 10) month = "0" + month;
  if (dayOfMonth < 10) dayOfMonth = "0" + dayOfMonth;
  const separetedDate = year + "-" + month + "-" + dayOfMonth;
  return separetedDate;
};
