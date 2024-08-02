
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
const logNumber: (i: number) => void = (i: number) =>  {
  console.log(i);
}

// when function returns "any" type
const json = '{"x": 10, "y": 20}';
const coordinates: {x: number, y: number} = JSON.parse(json); // TS is implicitly returning "any"
console.log(coordinates);

// when we declare a variable on one line
let words = ['red', 'gren', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // can be a number or boolean

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i]; // TS believes it should be boolean always so need type annotation
  }
}
