
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

// representing an object as tuple - it has a consistent ordering
// downside - must memorize the order of the information
// i.e. position 0 contains color of the drink
const pepsi: [string, boolean, number] = ['brown', true, 40];

// pepsi[0] = 40; // Type 'number' is not assignable to type 'string' - must be a string value

// alternative way to write tuples
type Drink = [string, boolean, number];
const sprite: Drink = ['clear', true, 40];

// it's not maintainable because the code is unclear
// i.e. what does these two numbers mean?
const carSpecs: [number, number] = [400, 3354];

// this is a much clearer code
type carStats = {
  horsepower: number,
  weight: number
}

const corollaStats: carStats = {
  horsepower: 100,
  weight: 100,
}

console.log(corollaStats);
