function Circle(r) {
  const pi = Math.PI;

  this.getArea = function () {
    return pi * Math.pow(r, 2);
  };

  this.getPerimeter = function () {
    return 2 * pi * r;
  };
}

const circy1 = new Circle(11);

console.log(circy1.getArea());

const circy2 = new Circle(4.44);
console.log(circy2.getPerimeter());
