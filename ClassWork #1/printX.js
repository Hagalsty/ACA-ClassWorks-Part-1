const printX = (n) => {
  let isOdd = true;
  let count = 0;
  let firstIndex = -1;
  let lastIndex = n;
  let middleLine = n % 2 == 0 ? n / 2 : n / 2 + 0.5;
  let spaces = 0;
  let tmp = "";
  let finalOne = "";

  if (n <= 0) return "Not valid size";
  if (n % 2 == 0) isOdd = false;
  for (let l = 0; l < n; l++) {
    tmp = "";
    spaces = 0;
    if (count < middleLine) {
      firstIndex++;
      lastIndex--;
    } else {
      firstIndex--;
      lastIndex++;
    }
    if (isOdd == false && count == middleLine) {
      firstIndex++;
      lastIndex--;
    }
    while (spaces != n) {
      if (!(spaces == firstIndex || spaces == lastIndex)) tmp += " ";
      else tmp += "X";
      spaces++;
    }
    count++;
    finalOne += tmp + "\n";
  }

  return finalOne;
};

console.log(printX(20));
