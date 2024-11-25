import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

//custom modules
import connectDB from "./config/db.js";

//routes
import userRoutes from "./routes/UserRoutes.js";
import OrderRoutes from "./routes/OrderRoutes.js";
import productRoutes from "./routes/ProductRoutes.js";

//  load environment variables from a .env file into your application's process.env object.
dotenv.config();

// models

// Utils

// declarations
const app = express();

// middlesware
app.use(express.json());
app.use(morgan("dev")); // use for loggging in development mode

//rest api

app.use("/api/user", userRoutes);
app.use("/api/order", OrderRoutes);
app.use("/api/product", productRoutes);

app.get("/", (req, res) => {
  res.send({ message: " Ecommerce Application ..!" });
});

// database
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is running in ${process.env.MODE} mode`);
});
