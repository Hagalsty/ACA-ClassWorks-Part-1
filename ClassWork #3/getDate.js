const getWeekDay = (str) => {
  let date = new Date(str);
  let names = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return names[date.getDay()];
};

const formatDate = (date) => {
  let months = [
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

  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
};

const getWeekOfMonth = (date) => {
  return Math.floor(date.getDate() / 7) + 1;
};

console.log(getWeekDay("12/07/2016"));
console.log(formatDate(new Date("2020-05-14")));
console.log(getWeekOfMonth(new Date(2017, 10, 9)));
