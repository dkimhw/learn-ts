

class Vehicle {
  color: string;

  constructor (color: string) {
    this.color = color;
  }

  public drive(): void {
    console.log('chugga chugga');
  }

  // only accessible within the child class that extends Vehicle
  protected honk(): void {
    console.log('beep');
  }
}

const v = new Vehicle('red');
console.log(v.color);

class NewCar extends Vehicle {
  constructor (public wheels: number, color: string) {
    super(color);
    this.wheels = wheels;
  }

  // override parent class method
  drive(): void {
    console.log('vroom');
  }

  // can set new methods
  // when marking methods as private is to restrict the different methods that other developers
  // can call.
  public park(): void {
    this.honk();
    console.log('i am parking!');
  }
}

// constructor of vehicle is being called so need to pass in a string color val
let newCar = new NewCar(4, 'red');
newCar.drive();
newCar.park();
