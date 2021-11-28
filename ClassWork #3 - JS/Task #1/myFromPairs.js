const myFromPairs = (arr) => {
  let res = {};

  for (let i = 0; i < arr.length; i++) res[arr[i][0]] = arr[i][1];

  return res;
};

console.log(
  myFromPairs([
    ["a", 1],
    ["b", 2],
  ])
);
