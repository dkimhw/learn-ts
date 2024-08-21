import { CustomMap } from "./CustomMap";
import { User } from './User';
import { Company } from './Company'
import dotenv from "dotenv"
dotenv.config();

const cm = new CustomMap(process.env.API_KEY || "")
const user = new User();

cm.initMap("map", user.location);
cm.addMarker(user);
