import express from "express";
import productController from "../controllers/ProductController.js";
import AuthenticationController from "../controllers/AuthenticationController.js";

const productRoutes = express.Router();

productRoutes.get(
  "/list",
  AuthenticationController.requireLoggedIn,
  productController.getAllProducts
);

export default productRoutes;
