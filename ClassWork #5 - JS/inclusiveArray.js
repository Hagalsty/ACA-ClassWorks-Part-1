const inclusiveArray = (start, end, arr = []) => {
  arr.push(start);
  if (start < end) inclusiveArray(++start, end, arr);

  return arr;
};

console.log(inclusiveArray(1, 5));
console.log(inclusiveArray(2, 8));
console.log(inclusiveArray(10, 20));
console.log(inclusiveArray(17, 5));
