const myGroupBy = (arr, func) => {
  let res = {};
  let key;

  for (i in arr) {
    key = func(arr[i]);
    if (!res.hasOwnProperty(key) && res[key] == undefined) res[key] = [];
    res[key].push(arr[i]);
  }
  return res;
};

console.log(
  myGroupBy([3.1, 2.6, 3.5], function (elem) {
    let val = elem;
    return Math.floor(val);
  })
);
