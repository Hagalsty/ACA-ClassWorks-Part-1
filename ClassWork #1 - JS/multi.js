const multi = (arr) => {
  let ret = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] != undefined) ret.push(arr[i] * arr[i + 1]);
  }
  return ret;
};

console.log(multi([3, 7, 12, 5, 20, 0]));
