const powersOfTwo = (start, end) => {
  let powed = 1;
  let res = "";

  while (powed <= end) {
    if (powed >= start) {
      res += powed;
      if (powed * 2 < end) res += ", ";
    }
    powed *= 2;
  }

  return res;
};

console.log(powersOfTwo(10, 120));
