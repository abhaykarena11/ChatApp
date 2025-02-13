import express from "express";
import { sendMessage , getMessage } from "../controllers/Message.controller.js";
import { SecureRoute } from "../middlewares/secureRoute.js";

const router = express.Router();
router.post("/send/:id",SecureRoute,sendMessage);
router.get("/get/:id",SecureRoute,getMessage);

export default router;