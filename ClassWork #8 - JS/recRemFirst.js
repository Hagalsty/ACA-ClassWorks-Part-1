const recRemFirst = (arr, res = []) => {
  let copy = [...arr];
  if (copy.length == 1 || copy.length == 0) return res;
  delete copy[0];
  copy = copy.filter(() => true);
  res.push(copy[0]);
  res = recRemFirst(copy, res);
  return res;
};

arr = [6, 78, "n", 0, 1];
console.log(arr);
console.log(recRemFirst(arr));
console.log(recRemFirst([5]));
console.log(recRemFirst([]));
console.log(arr);
