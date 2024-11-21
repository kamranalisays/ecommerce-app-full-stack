import express from "express";
import OrderController from "../controllers/OrderController.js";

const orderRoutes = express.Router();

orderRoutes.get("/list", OrderController.getAllOrders);

orderRoutes.post("/submitorder", OrderController.submitOrder);

export default orderRoutes;
