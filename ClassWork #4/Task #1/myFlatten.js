const myFlatten = (arr) => {
  const res = arr.reduce((acc, current) => acc.concat(current), []);

  return res;
};

console.log(myFlatten([1, [2, [3, [4, [9]]], 5]]));
