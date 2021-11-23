const strictEquel = (a, b) => {
  if (typeof a !== typeof b) return false;
  return a == b;
};

console.log(strictEquel(5, "5"));
