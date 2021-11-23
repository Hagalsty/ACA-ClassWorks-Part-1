const findViolatedIndex = (arr, index = 0) => {
  if (arr[index] > arr[index + 1]) return index;
  if (index + 1 == arr.length - 1) return -1;
  let res = findViolatedIndex(arr, index + 1);
  return res;
};

console.log(findViolatedIndex([2, 12, 15, 48, 64]));
console.log(findViolatedIndex([-9, -4, -4, 3, 12, 4, 5]));
