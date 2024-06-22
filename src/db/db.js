import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbUri = process.env.MONGODB_URI;

export async function connectToDatabase() {
  try {
    await mongoose.connect(dbUri);
    console.log("Connected to Database ✅");
  } catch (error) {
    console.error("❌ Failed to connect to Database", error);
  }
}
