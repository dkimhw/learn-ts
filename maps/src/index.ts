import { CustomMap } from "./CustomMap";
import dotenv from "dotenv"
dotenv.config();


const cm = new CustomMap(process.env.API_KEY || "")
cm.init_map("map");
cm.add_marker();
