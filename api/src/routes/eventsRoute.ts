import { store, index, show, update, destroy } from "controllers/eventsController";
import express from "express";
import { verifyToken } from "middleware/middleware";
import { upload } from "middleware/multer";
const eventsRoutes = express.Router();

eventsRoutes.post("/", verifyToken, upload.single("picurl"), store);
eventsRoutes.get("/", index);
eventsRoutes.get("/:id", show);
eventsRoutes.put("/:id", verifyToken, update);
eventsRoutes.delete("/:id", verifyToken, destroy);
export default eventsRoutes;
