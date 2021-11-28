const compose =
  (...funcs) =>
  (item) =>
    funcs.reduceRight((elem, fn) => fn(elem), item);

const getCount = (str) => {
  const obj = {};

  for (let item of str) obj[item] = obj[item] ? obj[item] + 1 : 1;

  return obj;
};

const getMax = (obj) => {
  let max;
  let char;
  for (let i in obj) {
    if (max) {
      if (max < obj[i]) {
        max = obj[i];
        char = i;
      }
    } else max = obj[i];
  }

  return char;
};

const strToArr = (str) => str.split("");

const arrToObj = (arr) =>
  arr.reduce((acc, curr) => (acc[curr] ? acc[curr]++ : (acc[curr] = 1)), {});

console.log(getMax(getCount("cdefabcabaa")));

compose(console.log, getMax, getCount)("cdefabcabaa");
