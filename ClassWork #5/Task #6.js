const Airplane = {
  init: function (name) {
    this.name = name;
    this.isFlying = false;
  },
  takeOff() {
    this.isFlying = true;
  },
  lands() {
    this.isFlying = fasle;
  },
};

Airplane.init("AX-6");
Airplane.takeOff();
console.log(Airplane.isFlying);
