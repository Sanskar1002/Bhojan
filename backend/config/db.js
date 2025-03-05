import mongoose from "mongoose";
const MONGO_URL = "mongodb://localhost:27017/food-app";
export const connectDB = async () => {
  await mongoose.connect(MONGO_URL).then(() => {
    console.log("DB connected");
  });
};
