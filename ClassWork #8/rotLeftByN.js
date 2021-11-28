const rotLeftByN = (arr, n) => {
  let res = [...arr];
  if (n == 0) return res;
  if (n > 0) {
    res.push(res[0]);
    delete res[0];
  } else {
    let last = res.length - 1;
    res.unshift(res[last]);
    delete res[last + 1];
  }
  res = res.filter(() => true);
  res = n < 0 ? rotLeftByN(res, n + 1) : rotLeftByN(res, n - 1);
  return res;
};

console.log(rotLeftByN(["a", "b", "c", "d", "e", "f", "g", "h"], 3));
console.log(rotLeftByN(["a", "b", "c", "d", "e", "f", "g", "h"], -2));
