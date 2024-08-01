
const today = new Date();
today.getMonth();

// today.getName();

class Color {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const red = new Color('Red');
console.log(red);
