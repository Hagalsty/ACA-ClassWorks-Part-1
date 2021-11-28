const middleRotate = (str) => {
  let i = str.length / 2;
  let check = 0;
  let newStr = "";
  let mid;

  if (str.length % 2 == 1) {
    i += 0.5;
    check = 1;
  }

  mid = i - 1;
  for (; i < str.length; i++) newStr = str[i] + newStr;
  if (check) newStr = str[mid] + newStr;
  for (let j = 0; j < mid; j++) newStr = str[j] + newStr;
  
  return newStr;
};

console.log(middleRotate("rotator"));
