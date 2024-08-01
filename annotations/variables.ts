
// Assign types
let apples: number = 5;
apples = 3;
// apples = true // will throw an error

let speed: string = 'fast';
let nothing: undefined = undefined;

// Arrays
let colors: string[] = ['red', 'green']
let nums: number[] = [1, 2, 3.0]

// Classes
class Car {

}

let car: Car = new Car();

// Object literal
let dog: { firstName: string; lastName: string} = {
  "firstName": "Lucky",
  "lastName": "Garcia"
}

// Function
const logNumber = (i: number) =>  {
  console.log(i);
}
