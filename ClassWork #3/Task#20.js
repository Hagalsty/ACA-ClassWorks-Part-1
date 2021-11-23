const products = [
  { number: 1, price: 100, name: "Orange juice" },
  { number: 2, price: 200, name: "Soda" },
  { number: 3, price: 150, name: "Chocolate snack" },
  { number: 4, price: 250, name: "Cookies" },
  { number: 5, price: 180, name: "Gummy bears" },
  { number: 6, price: 500, name: "Condoms" },
  { number: 7, price: 120, name: "Crackers" },
  { number: 8, price: 220, name: "Potato chips" },
  { number: 9, price: 80, name: "Small snack" },
];

const isValidProduct = (number, products) => {
  let len = products.length;

  for (let i = 0; i < len; i++) if (number == products[i].number) return 0;
  return 1;
};

const isEnoughCash = (money, pNum, products) => {
  let len = products.length;
  if (money >= products[pNum - 1].price) return 0;
  return 1;
};

const getChange = (money, price) => {
  const coins = [500, 200, 100, 50, 20, 10];
  const result = [];
  let change = money - price;

  for (let i = 0; i < coins.length; i++) {
    if (change >= coins[i]) {
      result.push(coins[i]);
      change -= coins[i];
      i--;
    }
  }

  return result;
};

const vendingMachin = (products, money, pNum) => {
  const res = {};

  if (isValidProduct(pNum, products)) return "Enter a valid product number";
  if (isEnoughCash(money, pNum, products))
    return "Not enough money for this product";

  const { price, name } = products[pNum - 1];

  res["product"] = name;
  res["change"] = [];

  let ret = money - price;

  res["change"] = getChange(money, price);

  return res;
};

console.log(vendingMachin(products, 200, 7));
console.log(vendingMachin(products, 500, 0));
console.log(vendingMachin(products, 100, 1));
