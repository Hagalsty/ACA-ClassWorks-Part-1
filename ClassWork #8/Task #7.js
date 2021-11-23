const recSum = (num) => {
  let sum = 0;
  if (num != 0) {
    sum += num % 10;
    sum += recSum(Math.floor(num / 10));
    if (String(sum).length > 1) sum = recSum(sum);

    return sum;
  }

  return 0;
};

console.log(recSum(14));
console.log(recSum(29));
console.log(recSum(999999999999));
