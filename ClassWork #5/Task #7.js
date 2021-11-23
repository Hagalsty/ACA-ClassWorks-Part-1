function Circle(r) {
  const pi = Math.PI;

  this.getArea = () => {
    return pi * r * r;
  };
  this.getPerimeter = () => {
    return 2 * pi * r;
  };
}

let circy = new Circle(11);
console.log(circy.getArea());
let circy1 = new Circle(4.44);
console.log(circy1.getPerimeter());
