function reverse(arr) {
  for (let i = 0; i < arr.length; i++)
    [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
  return arr;
}
