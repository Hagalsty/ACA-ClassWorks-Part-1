const getFrequencies = (arr) => {
  let res = {};
  let has = false;
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    if (!res.hasOwnProperty(arr[i]) && res[arr[i]] == undefined)
      res[arr[i]] = 1;
    else res[arr[i]] += 1;
  }

  return res;
};

console.log(getFrequencies([1, 2, 3, 3, 2]));
