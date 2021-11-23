// const gather = (letter, str=[]) => {
//     str.push(letter)

//     const f = function(letter, arr=str) {
//         arr.push(letter)

//         return f;
//     }

//     f.order = function (num, arrOrder=[]) {
//         arrOrder.push(num)
//         const g = function(num, arrForOrder=arrOrder) {
//             arrForOrder.push(num)
//             g.get = function () {
//                 const res = [];
//                 for (let i = 0; i < str.length; i++) res.push(str[arrForOrder[i]])
//                 return res.join('');
//             }
//             return g
//         }
//         return g
//     }
//     return f
// }

function gather(str) {
  this.text = str;
  this.orders = [];

  this.add = function (str) {
    this.text += str;

    return this.add;
  };

  this.add.order = function (num) {
    this.orders.push(num);

    return this.add.order;
  }.bind(this);

  this.add.order.get = function () {
    const result = orders.map((n) => text[n]);
    return result.join("");
  }.bind(this);

  return this.add;
}
console.log(gather("a")("b")("c").order(0)(1)(2).get());
console.log(gather("a")("b")("c").order(2)(1)(0).get());
console.log(gather("e")("l")("o")("l")("!")("h").order(5)(0)(1)(3)(2)(4).get());
