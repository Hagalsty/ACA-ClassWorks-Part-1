const whiteSpace = (str) => {
  let res = "";
  let i = 0;

  while (str[i] != undefined) {
    if (str[i] >= "A" && str[i] <= "Z") res += " ";
    res += str[i];
    i++;
  }

  return res;
};

console.log(whiteSpace("SheWalksToTheBe"));
