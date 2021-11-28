const replaceChar = (str, a, b) => {
  let newStr = "";

  for (let i = 0; i < str.length; i++)
    if (str[i] == a) newStr += b;
    else newStr += str[i];

  return newStr;
};

console.log(replaceChar("The results are not recorded yet", "t", "w"));
