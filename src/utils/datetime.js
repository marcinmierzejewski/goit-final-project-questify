const date = new Date();
export const today = date.toLocaleDateString("en-CA"); // YYYY-MM-DD
export const todayDate = new Date(today).getTime(); // in milliseconds

export const tomorrowDate = new Date(today).setDate(
  // in milliseconds
  new Date(today).getDate() + 1
);
export const tomorrow = new Date(tomorrowDate).toLocaleDateString("en-CA"); // YYYY-MM-DD

export const weekAheadDate = new Date(today).setDate(
  // in milliseconds
  new Date(today).getDate() + 7
);
export const weekAhead = new Date(weekAheadDate).toLocaleDateString("en-CA"); // YYYY-MM-DD

const currentHours = date.getHours();
const currentMinutes = date.getMinutes();

export const currentTime = `${currentHours}:${currentMinutes}`; // HH:MM
