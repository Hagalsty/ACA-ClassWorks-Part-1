const recFlatten = (arr) => {
  let res = [];

  for (let el of arr) {
    if (!Array.isArray(el)) res.push(el);
    else res.push(...recFlatten(el));
  }

  return res;
};

console.log(recFlatten([1, [3, 4, [1, 2]], 10]));
console.log(recFlatten([14, [1, [[[3, []]], 1], 0]]));
