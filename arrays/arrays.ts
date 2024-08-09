
const carMakers: string[] = ['ford', 'toyota', 'chevy'];

class Car {
  make: string;
  model: string
  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }
}

const cars: Car[] = []
cars.push(new Car('Ford', 'F-150'))
cars.push(new Car('BMW', 'X-3'))


console.log(cars);


// Help with inference when extracting values
const car = cars[0]; // TypeScript will infer the Car class

// Prevent incompatible values
// cars.push('hello'); // Argument of type 'string' is not assignable to parameter of type 'Car'

// Help with "map"
cars.map((car: Car) => {
  // provides autocomplete to the Car class
  return car.model;
});

// Flexible types
const importantDates = [new Date(), '2030-10-10']; // TS inferences (string | Date)[]

// importantDates.push(100); // Argument of type 'number' is not assignable to parameter of type 'string | Date'.
