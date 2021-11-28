const getDays = (a, b) => {
  let num = a < b ? b - a : a - b;

  return num / 8.64e7;
};

console.log(getDays(new Date("June 14, 2021"), new Date("June 14, 2020")));
