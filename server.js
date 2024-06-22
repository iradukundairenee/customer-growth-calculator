import express from "express";
import mongoose from "mongoose";
import growthRoutes from "./src/routes/growthRoutes.js";
import swaggerSetup from "./swagger/swagger.js";
import cors from "cors";
import {connectToDatabase} from "./src/db/db.js";
import dotenv  from "dotenv";


dotenv.config();



const app = express();
app.use(cors());
app.use(express.json());


app.use("/api", growthRoutes);
swaggerSetup(app);

try {
  connectToDatabase().then(() => {
    app.listen(7000, () => console.log(`app is listening on port 7000`));
  });
} catch (error) {
  console.error("❌ Failed to connect to Database", error);
}
