const printTringle = (n) => {
  let middle = false;
  let lines = n * 2 - 1;
  let numsStr = "";
  let tmp = "";
  let count = 0;
  let j = 1;

  if (n <= 0) return;
  for (let i = 0; i < lines; i++) {
    j = 1;
    tmp = "";
    if (count > lines / 2) middle = true;
    if (middle) count--;
    else count++;
    while (j <= count) {
      tmp += j;
      j++;
    }
    numsStr += tmp + "\n";
  }
  return numsStr;
};

console.log(printTringle(15));
