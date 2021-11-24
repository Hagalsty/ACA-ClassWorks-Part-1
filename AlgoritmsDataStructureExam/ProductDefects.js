function largestArea(matrix) {
  const temp = [...matrix];
  let res = 0;
  for (let i = 1; i < temp.length; i++) {
    for (let j = 1; j < temp[i].length; j++) {
      if (matrix[i][j] == 1) {
        temp[i][j] =
          Math.min(temp[i - 1][j], temp[i][j - 1], temp[i - 1][j - 1]) + 1;
      }
      if (res < temp[i][j]) res = temp[i][j];
    }
  }

  return res;
}
console.log(
  largestArea([
    [1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [1, 1, 1, 0, 0],
    [1, 1, 1, 0, 0],
    [1, 1, 1, 1, 1],
  ])
);
