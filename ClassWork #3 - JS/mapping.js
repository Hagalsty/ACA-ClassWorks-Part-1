const mapping = (arr) => {
  let res = {};
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    res[arr[i]] = arr[i].toUpperCase();
  }

  return res;
};

console.log(mapping(["a", "v", "y", "z"]));
