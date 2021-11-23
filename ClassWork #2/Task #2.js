const calculPerfect = (n) => {
  let res = "";
  let sum = 0;

  for (let i = 6; i <= n; i++) {
    sum = 0;
    for (let j = 1; j < i; j++) if (i % j == 0) sum += j;
    if (i == sum) {
      res += sum + " ";
    }
  }
  return res;
};

console.log(calculPerfect(10000));