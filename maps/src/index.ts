import { User } from "./User";
import { Company } from "./Company";
import dotenv from "dotenv"
import { Loader } from '@googlemaps/js-api-loader';

dotenv.config();

// const loader = new Loader({
//   apiKey: `${process.env.API_KEY}`,
//   version: "weekly",
//   libraries: ["places"]
// });

// const mapOptions = {
//   center: {
//     lat: 0,
//     lng: 0
//   },
//   zoom: 4
// };

// // Promise for a specific library
// let mapElement: any = document.getElementById("map")

// loader
//   .importLibrary('maps')
//   .then(({Map}) => {
//     new Map(mapElement, mapOptions);
//   })
//   .catch((e) => {
//     // do something
//     console.log(e);
//   });

console.log(google);
