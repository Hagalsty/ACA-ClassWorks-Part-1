const myDiferenceWith = (arr, values, compare) => {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (compare(arr[i], values)) continue;
    else res.push(arr[i]);
  }

  return res;
};
