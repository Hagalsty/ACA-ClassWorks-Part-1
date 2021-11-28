const myJoin = (arr, separator = ",") => {
  const lastindex = arr.length - 1;
  const res = arr.reduce((acc, curr, index) => {
    if (index == lastindex) return (acc += curr);
    return (acc += curr + separator);
  }, "");

  return res;
};

console.log(myJoin([1, [2, [3, [4, [9]]], 5]]));
