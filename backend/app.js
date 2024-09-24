import express from "express";
import cookieParser from "cookie-parser";
export const app = express();
import cors from 'cors';

app.use(cors({
  // origin: 'http://localhost:3000',
  origin: 'https://www.bibekghosh.live',
  origin: '*',
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
