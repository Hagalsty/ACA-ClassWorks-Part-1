const myNew = (constructor, ...params) => {
  const ret = {};
  const ifObject = constructor.apply(ret, [...params]);
  if (typeof ifObject == "object") return ifObject;
  return ret;
};

function Dog(pname, age) {
  this.pname = pname;
  this.age = age;
}

let dog1 = new Dog("boby", 15);
let dog2 = myNew(Dog, "boby", 15);
console.log(dog1, "----", dog2);
console.log(dog1.prototype, dog2.prototype);
console.log(dog1.age, dog2.age);
console.log(dog1.pname, dog2.pname);

let obj1 = new Object({ x: 1, y: 2 });
let obj2 = myNew(Object, { x: 1, y: 2 });
console.log(obj1, obj2);
