const compose =
  (...funcs) =>
  (item) =>
    funcs.reduceRight((elem, fn) => fn(elem), item);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filter = (arr) => arr.filter((elem) => elem % 2 != 0);
const calcul = (filterd) => filterd.reduce((acc, curr) => (acc += curr), 0);
const print = (result) => `The result is ${result}.`;

console.log(print(calcul(filter(arr))));

compose(console.log, print, calcul, filter)(arr);
