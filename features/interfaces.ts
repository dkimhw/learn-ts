
// for reusability - kind of like how in some languages there is
// a "print" method that can be implemented by different objects
interface Reportable {
  summary(): string,
}

// interface Vehicle {
//   name: string,
//   year: number,
//   broken: boolean,
//   summary(): string, // can add functions to interfaces
// }

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `
      Name: ${this.name}
      Year: ${this.year}
      Broken?: ${this.broken}
    `
  }
}

// pepsi implents the reportable interface
const newPepsi = {
  name: 'Pepsi',
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink is ${this.name}`
  },
}

// requires an object that has name, year, broken with appropriate types for each property
const printSummary = (item: Reportable): void => {
  console.log(item.summary())
}

printSummary(oldCivic);
printSummary(newPepsi);
