import express from "express";
import cookieParser from "cookie-parser";
// import path from "path";
export const app = express();
const cors=require("cors");

app.use(cors({
  origin: "https://localhost:3000",
  credentials: true,
}));

app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
// app.use("/test", (req, res) => {
//   res.send("Hello world!");
// });
// app.get('/', function (req, res) {
//   res.send('hello world')
// })
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

import { userRouter } from "./routes/User.js";
app.use("/api/v1", userRouter);

// app.use(express.static(path.resolve("./frontend/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve("./frontend/build/index.html"));
// });
