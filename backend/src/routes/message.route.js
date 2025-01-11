import express from "express";
import {
  getMessage,
  getUserForSidebar,
  sendMessage,
} from "../controllers/message.controller.js";

import protectRoute from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/users", protectRoute, getUserForSidebar);
router.get("/:id", protectRoute, getMessage);
router.post("/send/:id", protectRoute, sendMessage);

export default router;
