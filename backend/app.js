import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";

// config
dotenv.config();

// database
connectDB();

const app = express();

// middlesware
app.use(express.json);
app.use(morgan("dev"));

//rest api
app.get("/", (req, res) => {
  res.send({ message: " Ecommerce Application ..!" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running in ${process.env.MODE} mode`);
});
