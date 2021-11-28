const prefix = (str) => {
  let splited = str.split(" ");
  let sign = splited[0];
  let first = splited[1];
  let second = splited[2];
  let res;

  if (sign == "*") res = Number(first) * Number(second);
  else if (sign == "+") res = Number(first) + Number(second);
  else if (sign == "-") res = Number(first) - Number(second);
  else if (sign == "/") res = Number(first) / Number(second);

  return res;
};

console.log(prefix("+ 5 4"));
console.log(prefix("* 12 2"));
console.log(prefix("+ -10 10"));
