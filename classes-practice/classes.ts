

class Vehicle {
  drive(): void {
    console.log('chugga chugga');
  }

  honk(): void {
    console.log('beep');
  }
}

class NewCar extends Vehicle {
  // override parent class method
  drive(): void {
    console.log('vroom');
  }
}

let newCar = new NewCar();
newCar.drive();
newCar.honk();
