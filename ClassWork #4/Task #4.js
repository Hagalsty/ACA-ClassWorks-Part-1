const isPalindrom = (num) => {
  let temp = 0;
  let final = 0;
  let rem = 0;

  temp = num;
  while (num > 0) {
    rem = num % 10;
    num = parseInt(num / 10);
    final = final * 10 + rem;
  }
  if (final == temp) return 1;
  return 0;
};

const canBePalindrom = (num) => {
  let obj = {};
  let str = new String(num);
  str = str.split("");

  for (let i in str) {
    if (obj.hasOwnProperty(str[i]) && obj[str[i]]) obj[str[i]] += 1;
    else {
      obj[str[i]] = 1;
    }
  }

  let isOdd = false;

  for (let i in obj)
    if (obj[i] % 2 != 0)
      if (!isOdd) isOdd = true;
      else return 0;

  return 1;
};

const palindromeSieve = (arr) => {
  let res = [];

  arr.map((elem) => {
    if (isPalindrom(elem)) res.push(elem);
    else {
      if (canBePalindrom(elem)) res.push(elem);
    }
  });

  return res;
};

console.log(palindromeSieve([443, 12, 639, 121, 3232]));
console.log(palindromeSieve([5, 55, 6655, 8787]));
console.log(palindromeSieve([897, 89, 23, 54, 6197, 53342]));
