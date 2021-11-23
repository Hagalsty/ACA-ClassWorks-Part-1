const magic = () => {
  magic.replace = (str, from, to) => {
    return str
      .split("")
      .map((el) => {
        if (el == from) return to;
        return el;
      })
      .join("");
  };

  magic.slice = (arr, start, end) => {
    const ret = [];
    let stop = arr.length - 1;

    if (start == undefined) return arr;
    if (start < 0) start += arr.length;
    if (end < 0) end += arr.length;
    if (end != undefined) stop = end - 1;
    for (let i = start; i <= stop; i++) ret.push(arr[i]);

    return ret;
  };

  magic.trim = (str) => {
    let ret = "";
    let i = 0;
    let j = str.length - 1;

    for (i; str[i] == " "; i++) continue;
    for (j; str[j] == " "; j--) continue;
    for (i; i <= j; i++) ret += str[i];

    return ret;
  };

  magic.getLength = (str) => {
    let i = 0;
    for (i; str[i] != undefined; i++) continue;

    return i;
  };
};

console.log(magic());
console.log(magic.replace("azerty", "a", "A"));
console.log(magic.slice([1, 2, 3, 4, 5], 2, 4));
console.log(magic.trim("    javascript is     awesome "));
console.log(magic.getLength("hello word"));
