const convertFunc = (func) => {
  let isArrow = false;
  let name = "";
  let variable = "";
  let splited = func.split(" ");
  let ret = "";
  let i = 0;

  if (splited[0] != "function") isArrow = true;
  if (!isArrow) {
    while (splited[1][i] != "(") i++;
    variable = splited[1].slice(i);
    name = splited[1].slice(0, i);
    splited.shift();
    splited.shift();
    splited = splited.join(" ");
    if (name.length > 0) {
      return `const ${name} = ${variable} => ${splited}`;
    } else {
      return `${variable} => ${splited} `;
    }
  } else {
    if (splited[0][0] == "(") {
      variable = splited[0];
      splited.shift();
      splited = splited.join(" ");
      return `function ${variable} ${splited}`;
    } else {
      name = splited[1];
      variable = splited[3];
      while (i < 5) {
        splited.shift();
        i++;
      }
      splited = splited.join(" ");
      return `function ${name}${variable} ${splited}`;
    }
  }
};

console.log(convertFunc("function name(str) { console.log(str);}"));
console.log(convertFunc("function name() {}"));
console.log(convertFunc("function () {}"));
console.log(convertFunc("const name = (str) => { bkhbkhb }"));
console.log(convertFunc("() => {}"));
