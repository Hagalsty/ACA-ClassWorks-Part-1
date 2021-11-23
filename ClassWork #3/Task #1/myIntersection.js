const myIntersection = (...arrays) => {
  let res = [];

  for (i in arrays[0]) {
    let check = false;
    for (let j in arrays) {
      if (!arrays[j].includes(arrays[0][i])) check = true;
    }
    if (!check) res.push(arrays[0][i]);
  }

  return res;
};

console.log(myIntersection([2, 1], [2, 3]));
