const counter = (num) => {
  if (num == 0) return 0;
  if (num < 0) num *= -1;
  let amount = counter(Math.floor(num / 10));
  amount++;

  return amount;
};

console.log(counter(318));
console.log(counter(-92563));
console.log(counter(-4666));
console.log(counter(-314890));
console.log(counter(654321));
