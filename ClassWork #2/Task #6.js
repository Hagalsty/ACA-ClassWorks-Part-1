const countBumerangs = (arr) => {
  let count = 0;
  let len = arr.length;

  for (let i = 1; i < arr.length; i++) {
    if (
      arr[i - 1] === arr[i + 1] &&
      arr[i] !== arr[i + 1] &&
      arr[i] != arr[i - 1]
    )
      count++;
  }

  return count;
};
