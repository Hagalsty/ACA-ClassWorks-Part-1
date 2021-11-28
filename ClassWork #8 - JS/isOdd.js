const isOdd = (num) => {
  if (num > 0) {
    if (num % 2 == 0) return false;
    return isOdd(Math.floor(num / 10));
  }
  return true;
};

console.log(isOdd(137779));
console.log(isOdd(0));
