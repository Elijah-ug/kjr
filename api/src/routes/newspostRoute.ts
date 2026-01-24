import { destroy, index, show, store, update } from "controllers/newspostController";
import express from "express";
import { verifyToken } from "middleware/middleware";
import { upload } from "middleware/multer";
const newsRoutes = express.Router();

newsRoutes.post("/", verifyToken, upload.single("picurl"), store);
newsRoutes.get("/", index);
newsRoutes.get("/:id", show);
newsRoutes.put("/:id", verifyToken, update);
newsRoutes.delete("/:id", verifyToken, destroy);
export default newsRoutes;
