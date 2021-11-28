const getMinPos = (arr, n = 0, min) => {
  if (n == arr.length) return min;
  if (arr.every((el) => el < 0)) return -1;
  if (arr.includes(0)) return 0;
  arr = arr.filter((el) => el > 0);
  const forCheck = [];
  for (let i = 0; i < n; i++) forCheck.push(arr[i]);
  min = Math.min(...forCheck);
  return getMinPos(arr, n + 1, min);
};

arr = [-1, 1, -10000, -2, 89, 1500, 36, 27, 5, 58, 66, -56];
console.log(getMinPos(arr));
