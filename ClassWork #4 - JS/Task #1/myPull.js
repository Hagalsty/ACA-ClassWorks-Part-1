function pull(array, ...value) {
  for (let i = 0; i < value.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (value[i] === array[j]) {
        array.splice(j, 1);
      }
    }
  }
  return array;
}

console.log(pull(["a", "b", "c", "a", "b", "c"], "a", "c"));
console.log(pull([1, 2, 3, 1, 3, 4, 1, 5], 1, 5));
console.log(pull(["a", "b", "c", "d"], "c"));
