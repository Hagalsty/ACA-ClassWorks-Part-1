function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometr = 0;

  this.fill = function (gallons) {
    this.tank += gallons;
  };

  this.drive = function (distance) {
    let total = this.tank * this.milesPerGallon;

    if (distance >= total) {
      this.tank = 0;
      this.odometr += total;

      return `I ran out of fuel at ${this.odometr} miles`;
    } else if (distance < total) {
      total -= distance;
      this.odometr += distance;
      this.tank = total / this.milesPerGallon;

      return "Done";
    }
  };
}

let mers = new Car("c300", 20);
console.log(mers);
mers.fill(30);
console.log(mers.drive(20));
console.log(mers.drive(5000));
