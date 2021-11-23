const myIndexOf = (arr, val, fromIndex = 0) => {
  for (let i = fromIndex; i < arr.length; i++) if (arr[i] == val) return i;
};
