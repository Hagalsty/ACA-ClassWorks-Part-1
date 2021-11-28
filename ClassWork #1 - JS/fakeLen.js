const fakeLen = (arr) => {
  let len = 0;

  for (i in arr) len = i;
  return Number(len) + 1;
};

console.log("len", fakeLen([1, 12, 4]));
console.log(fakeLen([-1, 0, 1, 2]));
console.log(fakeLen([]));
console.log(fakeLen([-1, 0.4]));
