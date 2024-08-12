
interface Vehicle {
  name: string,
  year: number,
  broken: boolean,
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
}

// requires an object that has name, year, broken with appropriate types for each property
const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken?: ${vehicle.broken}`);
}

printVehicle(oldCivic);
