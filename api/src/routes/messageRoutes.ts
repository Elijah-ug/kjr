import { destroy, index, show, store } from "controllers/messageController";
import express from "express";
import { verifyToken } from "middleware/middleware";
const messageRoutes = express.Router();

messageRoutes.post("/", store);
messageRoutes.get("/", verifyToken, index);
messageRoutes.get("/:id", verifyToken, show);
messageRoutes.delete("/:id", verifyToken, destroy);
export default messageRoutes;
