const allPairs = (arr, sum) => {
  let res = [];
  let tmp = [];
  let len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    tmp = [];
    for (let j = i + 1; arr[j] != undefined; j++) {
      if (arr[i] + arr[j] == sum) {
        tmp.push(arr[i], arr[j]);
        res.push(tmp);
        arr.splice(j, 1);
        break;
      }
    }
  }
  for (let i = 0; i < res.length; i++) {
    res[i].sort();
  }
  if (res.length > 1) res.sort();

  return res;
};

console.log(allPairs([2, 3, 4, 5], 7));
console.log(allPairs([5, 3, 9, 2, 1], 3));
console.log(allPairs([4, 5, 1, 3, 6, 8], 9));
