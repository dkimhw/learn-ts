
const forecast = {
  date: new Date(),
  weather: "sunny",
}

const logWeather = ({ date, weather }: { date: Date, weather: string}): void => {
  console.log(date);
  console.log(weather);
}

logWeather(forecast)


const profile = {
  age: 34,
  coords: {
    lat: 10,
    long: 10,
  },
  setAge(age: number): void {
    this.age = age;
  }
}

const { age }: { age: number } = profile;
const {
  coords: {lat, long}
}: { coords: { lat: number; long: number } } = profile

console.log(lat, long)
