const depth = (arr) => {
  let depthCount = 1;
  let tmp;

  arr.map((elem) => {
    if (Array.isArray(elem)) {
      tmp = depth(elem);
      depthCount += tmp;
    }
  });

  return depthCount;
};

console.log(depth([1, [2, [3, [4, [5, [6, [7, [8, [9]]]]]]]]]));
