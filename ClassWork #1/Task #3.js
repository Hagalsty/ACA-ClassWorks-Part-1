const spacedElem = (min, max, step) => {
  let arr = [min];

  while (min <= max) {
    min += step;
    arr.push(min);
  }
  return arr;
};

console.log(spacedElem(1, 5, 1));
console.log(spacedElem(10, 100, 20));
console.log(spacedElem(1, 5, 0.5));
