import express from "express";
import UserController from "../controllers/UserController.js";

const router = express.Router();

router.post("/register", UserController.userRegister);

router.post("/login", UserController.userLogin);

export default router;
