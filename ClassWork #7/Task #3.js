const menu = [
  { name: "Pizza", type: "Food", price: 350 },
  { name: "Coca Cola", type: "Drink", price: 250 },
  { name: "Burger", type: "Food", price: 950 },
  { name: "Coffee", type: "Drink", price: 200 },
  { name: "Mars", type: "Food", price: 300 },
];

class CoffeeShop {
  constructor(name, menu) {
    this.name = name;
    this.menu = menu;
    this.order = [];
  }
  addOrder(item) {
    let obj = menu.find((el) => el.name == item);
    if (!obj) return "This item is currently unavailable!";
    this.order.push(obj);
    return "Order was taken";
  }
  fulfillOrder() {
    let order = this.order.shift();
    if (!order) return "All orders have been fulfilled!";
    return `The ${order.name} is ready`;
  }
  listOrders() {
    return this.order;
  }
  dueAmount() {
    let total = 0;
    this.order.map((el) => (total += el.price));
    return total;
  }
  cheapestItem() {
    let cheapest = this.menu[0];
    this.menu.map((el) => {
      if (el.price < cheapest.price) cheapest = el;
    });
    return cheapest;
  }
  drinksOnly() {
    const res = [];
    this.menu.map((el) => {
      if (el.type == "Drink") res.push(el.name);
    });
    return res;
  }
  foodOnly() {
    const res = [];
    this.menu.map((el) => {
      if (el.type == "Food") res.push(el.name);
    });
    return res;
  }
}

const a = new CoffeeShop("ddd", menu);
console.log(a.addOrder("Mars"));
console.log(a.addOrder("Burger"));
console.log(a.addOrder("Pizza"));
console.log(a.listOrders());
console.log(a.dueAmount());
console.log(a.fulfillOrder());
console.log(a.fulfillOrder());
console.log(a.cheapestItem());
console.log(a.drinksOnly());
console.log(a.foodOnly());
