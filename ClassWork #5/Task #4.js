const group = (arr, size) => {
  const res = [];
  let tmp = [];
  let len = arr.length;
  let step = Math.ceil(len / size);

  for (let i = 0; i < step; i++) {
    tmp = [];
    for (let j = i; j < len; j += step) tmp.push(arr[j]);
    res.push(tmp);
  }

  return res;
};

const arr = [1, 2, 3, 4, 5, 6];

console.log(group(arr, 1));
console.log(group(arr, 4));
