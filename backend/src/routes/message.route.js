import express from "express";
import { getMessage, getUserForSidebar, sendMessage } from "../controllers/message.controller.js";
import isAuthenticated from "../middleware/auth.middleware.js";
import protectRoute from "../middleware/auth.middleware.js";

const router = express.Router();

router.route("/send/:id").post(isAuthenticated, sendMessage);
router.get("/users",protectRoute,getUserForSidebar);
router.get("/:id",protectRoute,getMessage);
router.post("/send/:id",protectRoute,sendMessage)

export default router;
