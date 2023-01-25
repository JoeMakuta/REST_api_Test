import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const { PORT } = process.env;

app.use("/", (req, res) => {
  res.status(200).json({ message: "Hello guys ..." });
});

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + PORT);
});
