import express from "express";
import UserRegister from "../controllers/UserController.js";

const router = express.Router();

router.post("/register", UserRegister.userRegister);

export default router;
