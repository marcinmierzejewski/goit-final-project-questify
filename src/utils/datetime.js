const currentDay = new Date().getDate();
const currentMonth = (new Date().getMonth()) + 1;
const currentYear = new Date().getFullYear();

export const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
export const tomorrowDate = `${currentYear}-${currentMonth}-${currentDay + 1}`;

const currentHours = new Date().getHours();
const currentMinutes = new Date().getMinutes();

export const currentTime = `${currentHours}:${currentMinutes}`;
