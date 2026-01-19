import express from "express";
import { destroy, index, show, store, update } from "../controllers/adminController";
const adminRoute = express.Router();

adminRoute.post("/", store);
adminRoute.get("/", index);
adminRoute.get("/:id", show);
adminRoute.put("/:id", update);
adminRoute.delete("/:id", destroy);
export default adminRoute;
