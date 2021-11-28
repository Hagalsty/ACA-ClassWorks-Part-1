const numToGoogle = (arr) => {
  let final = "";
  let lastPoint = "";
  for (let j = 0; j < arr.length; j++) {
    arg = typeof arr[j] == "number" ? arr[j] + "" : arr[j];

    let res = "";
    let contin = false;
    lastPoint = "";
    for (let i = 0; i < arg.length; i++) {
      switch (arg[i]) {
        case "0":
          arg = arg.slice(0, arg.indexOf("0"));
          for (let k = 0; k < arg.length; k++) res += res[k];
          break;
        case "1":
          res += "g";
          break;
        case "2":
          res += "o";
          break;
        case "3":
          res += "l";
          break;
        case "4":
          res += "e";
          break;
        case "5":
          for (let f = 0; f < res.length; f++) res = res.toUpperCase();
          break;
        case "6":
          lastPoint = ".";
          break;
        case "7":
          let finalRes = "";
          if (res[0] == res[0].toUpperCase())
            finalRes = res[0].toLowerCase() + res.slice(1);
          else finalRes = res[0].toUpperCase() + res.slice(1);
          console.log(finalRes);
          res = finalRes;
          break;
        case "8":
          res = res.split("").reverse().join("");
          break;
        case "9":
          res = "";
          contin = true;
      }
    }
    if (contin) continue;
    res += lastPoint;
    final += res;
  }

  return final;
};

console.log(numToGoogle(["12213467"]));
console.log(numToGoogle(["12213467", "321"]));
console.log(numToGoogle(["12213467", "321", "122906"]));
console.log(numToGoogle(["15", "2502", "15", 345]));
console.log(numToGoogle(["15", "2502", "15", 35, 45]));
console.log(numToGoogle([15, 202, 1, 3, 4]));
