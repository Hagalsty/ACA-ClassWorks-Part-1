const maxPossible = (num1, num2) => {
  const res = [];
  let n1 = num1.toString().split("");
  let n2 = num2.toString().split("");

  n1.map((el) => {
    let ok = false;
    let max = Math.max(...n2);
    if (el < max) {
      res.push(max);
      delete n2[n2.indexOf(max.toString())];
      n2 = n2.filter(() => true);
      ok = true;
    }
    if (!ok) res.push(el);
  });

  return parseInt(res.join(""));
};

console.log(maxPossible(9328, 456));
console.log(maxPossible(523, 76));
console.log(maxPossible(9132, 5564));
console.log(maxPossible(8732, 91255));
