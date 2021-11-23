const filterDup = (arr) => {
  const ret = arr.filter((el, i) => i == arr.indexOf(el));

  return ret;
};

console.log("task 9", filterDup([1, 2, 3, 3, 2, 5, 5, 4, 4]));
