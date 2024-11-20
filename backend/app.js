import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";

//custom modules
import connectDB from "./config/db.js";

//routes
import userRoutes from "./routes/UserRoutes.js";

// config
dotenv.config();

// models

// Utils

// declarations
const app = express();

// middlesware
app.use(express.json());
app.use(morgan("dev"));

//rest api

app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.send({ message: " Ecommerce Application ..!" });
});

// database
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is running in ${process.env.MODE} mode`);
});
