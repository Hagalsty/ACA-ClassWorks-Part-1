const myXor = (...arrays) => {
  res = [];

  for (k in arrays)
    for (i in arrays[k]) {
      let check = false;
      for (let j in arrays) {
        if (arrays[j].includes(arrays[k][i]) && j != k) check = true;
      }
      if (!check) res.push(arrays[k][i]);
    }

  return res;
};

console.log(myXor([2, 1], [2, 3], [3, 4], [5, 6]));
