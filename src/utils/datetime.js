const currentDate = new Date();
export const todayDate = currentDate.toLocaleDateString("en-CA"); // YYYY-MM-DD
export const todayDateInMs = new Date(todayDate).getTime(); // in milliseconds

export const tomorrowDateInMs = new Date(todayDate).setDate( // in milliseconds
  new Date(todayDate).getDate() + 1
);
export const tomorrowDate = new Date(tomorrowDateInMs).toLocaleDateString("en-CA"); // YYYY-MM-DD

export const weekAheadDateInMs = new Date(todayDate).setDate( // in milliseconds
  new Date(todayDate).getDate() + 7
);
export const weekAheadDate = new Date(weekAheadDateInMs).toLocaleDateString("en-CA"); // YYYY-MM-DD
