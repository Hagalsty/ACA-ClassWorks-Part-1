const myFlattenDeep = (arr) => {
  const res = arr.reduce(
    (acc, current) =>
      acc.concat(Array.isArray(current) ? myFlattenDeep(current) : current),
    []
  );

  return res;
};

console.log(myFlattenDeep([1, [2, [3, [4, [9]]], 5]]));
