const dayOfYear = (date) => {
  date = date.split("/");
  const first = new Date(Number(date[2]), 0, 1);
  const second = new Date(
    Number(date[2]),
    Number(date[0]) - 1,
    Number(date[1]) + 1
  );
  return Math.abs(second - first) / 1000 / 60 / 60 / 24;
};

console.log(dayOfYear("12/13/2020"));
console.log(dayOfYear("12/17/2020"));
console.log(dayOfYear("11/16/2020"));
console.log(dayOfYear("1/9/2019"));
