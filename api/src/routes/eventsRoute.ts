import { store, index, show, update, destroy } from "controllers/eventsController";
import express from "express";
import { verifyToken } from "middleware/middleware";
const eventsRoutes = express.Router();

eventsRoutes.post("/", verifyToken, store);
eventsRoutes.get("/", index);
eventsRoutes.get("/:id", show);
eventsRoutes.put("/:id", verifyToken, update);
eventsRoutes.delete("/:id", verifyToken, destroy);
export default eventsRoutes;
