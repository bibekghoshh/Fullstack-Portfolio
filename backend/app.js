import express from "express";
import cookieParser from "cookie-parser";
export const app = express();
import cors from 'cors';

// app.use(cors({
//   // origin: 'http://localhost:3000',
//   origin: 'https://www.bibekghosh.live',
//   origin: '*',
//   credentials: true,
// }));

app.use(cors({
  origin: (origin, callback) => {
    const allowedOrigins = ['https://www.bibekghosh.live', 'https://www.bibekghosh.tech'];
    
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true); // Allow the request
    } else {
      callback(new Error('Not allowed by CORS')); // Block the request
    }
  },
  credentials: true,
}));


app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use("/test", (req, res) => {
  res.send("Hello world!");
});

app.use(express.urlencoded({ extended: true, limit: "50mb" }));

import { userRouter } from "./routes/User.js";
app.use("/api/v1", userRouter);









// import path from "path";
// app.use(express.static(path.resolve("./frontend/build")));
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve("./frontend/build/index.html"));
// });
