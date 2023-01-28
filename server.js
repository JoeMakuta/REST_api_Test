import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import admin_router from "./routes/admin/admin.js";
import product_router from "./routes/products/products.js";

dotenv.config();
const app = express();
const { PORT, DBURI } = process.env;

//DB connection

mongoose
  .connect(DBURI)
  .then(() => {
    console.log("Db connexion succeded");
  })
  .catch(() => {
    console.log("An error occured while trying to connect to db");
  });

app.use(express.json());
// app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/admin", admin_router);
app.use("/product", product_router);

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + PORT);
});

export default app;
