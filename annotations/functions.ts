

// Type annotation functions
const sayHello: (name: string) => void = (name: string) => {
  console.log("Hello, ", name);
}

// Type inference for functions
const add = (a: number, b: number) => {
  return a + b;
}

const s = add(3, 4) // infers the return value as number


const subtract = (a: number, b: number) => {
  return 'blah';
}

// because the return is implied & the result variable is infered as well
// TS doesn't pick up this error
const result = subtract(3, 4);

// If we annotate result2 as number TS will pick up the error
// const result2: number = subtract(3, 4);

// Throwing error
// Never indicates that function will never actually reach the end
const throwError = (message: string): never => {
  throw new Error(message)
}

// Throwing error
// Never indicates that function will never actually reach the end
const throwErrorMessage = (message: string): string => {
  if (!message) {
    throw new Error(message)
  }

  return message;
}
