const find_max_len = (arr) => {
  let max = arr[0].length;

  for (let i in arr) {
    if (arr[i].length > max) max = arr[i].length;
  }

  return max;
};

const myUnZip = (arr) => {
  let res = [];
  let tmp = [];
  let max = find_max_len(arr);

  for (let i = 0; i < max; i++) {
    tmp = [];
    for (let j in arr) {
      tmp.push(arr[j][i]);
    }
    res.push(tmp);
  }
  return res;
};

console.log(myUnZip(myZip([1, 2], ["a", "b"], [true, false])));
