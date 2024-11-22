import express from "express";
import OrderController from "../controllers/OrderController.js";
import AuthenticationController from "../controllers/AuthenticationController.js";

const orderRoutes = express.Router();

orderRoutes.get(
  "/list",
  AuthenticationController.requireLoggedIn,
  OrderController.getAllOrders
);

orderRoutes.post("/submitorder", OrderController.submitOrder);

export default orderRoutes;
