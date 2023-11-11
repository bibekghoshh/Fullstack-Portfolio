import { app } from "./app.js";
import dotenv from "dotenv";
import { connectDatabase } from "./config/database.js";
import cloudinary from "cloudinary";
// import { User } from "./model/User.js";

dotenv.config({ path: "./config/config.env" });

connectDatabase();

// User({email: "bbbb.com", password: "paasss"}).save();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT} `);
});