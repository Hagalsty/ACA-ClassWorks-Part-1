const findOccur = (str, symbol) => {
  let count = 0;

  for (let i = 0; i < str.length; i++) if (str[i] == symbol) count++;
  return count;
};

console.log(findOccur("Some text hera", "a"));
console.log(findOccur("another string", "t"));
