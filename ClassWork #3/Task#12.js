function sumArg(...args) {
  return args.reduce((sum, current) => {
    return sum + current;
  });
}

console.log(sumArg(1, 2));
console.log(sumArg(1, 2, 3));
