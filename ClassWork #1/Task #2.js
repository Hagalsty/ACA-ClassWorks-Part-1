const fakeSum = (arr) => {
  let aggr = 0;

  for (let i = 0; i < arr.length; i++) aggr += arr[i];
  return aggr;
};

console.log(fakeSum([1, 12, 4]));
console.log(fakeSum([-1, 0, 1, 2]));
console.log(fakeSum([]));
console.log(fakeSum([-1, 0.4]));
