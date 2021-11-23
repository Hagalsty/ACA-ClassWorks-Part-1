const chunkDivider = (arr, len) => {
  let res = [];
  let tmp = [];
  let count = 0;

  if (arr.length % len != 0) return arr;
  for (let i = 0; i < arr.length; i++) {
    count = 0;
    tmp = [];
    while (count < len) {
      tmp.push(arr[i + count]);
      count++;
    }
    i += --count;
    res.push(tmp);
  }

  return res;
};
