const findMax = (arr) => {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
  }
  return max;
};

console.log(findMax([1, 10, 2, 2, 3]));
console.log(findMax([1, 4, 43, -112]));
