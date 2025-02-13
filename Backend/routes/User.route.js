import express from "express";
import { getAllUsers, Login, Logout, Signup } from "../controllers/User.controller.js";
import { SecureRoute } from "../middlewares/secureRoute.js";
const router = express.Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.get("/logout", Logout);
router.get("/getAllUsers",SecureRoute,getAllUsers);


export default router;
