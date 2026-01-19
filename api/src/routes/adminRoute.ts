import express from "express";
import { destroy, index, login, show, store, update } from "../controllers/adminController";
import { verifyToken } from "middleware/middleware";
const adminRoute = express.Router();

adminRoute.post("/", store);
adminRoute.post("/login", login);
adminRoute.get("/", index);
adminRoute.get("/me", verifyToken, show);
adminRoute.put("/:id", verifyToken, update);
adminRoute.delete("/:id", verifyToken, destroy);
export default adminRoute;
