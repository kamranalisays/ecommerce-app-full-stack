import express from "express";
import UserController from "../controllers/UserController.js";
import UserValidations from "../Validations.js/UserValidations.js";

const router = express.Router();

router.post(
  "/register",
  UserValidations.userRegisterValidator, // this will be called first
  UserController.userRegister // this will be called after the validation
);

router.post("/login", UserController.userLogin);

export default router;
