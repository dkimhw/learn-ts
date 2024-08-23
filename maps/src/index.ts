import { CustomMap } from "./CustomMap";
import { User } from './User';
import { Company } from './Company'
import dotenv from "dotenv"
dotenv.config();

const cm = new CustomMap(process.env.API_KEY || "")
const user = new User();
const company = new Company();

cm.initMap("map", { lat: 0, lng: 0});
cm.addMarker(user);
cm.addMarker(company)
