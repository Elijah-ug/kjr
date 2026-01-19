import express from "express";
import { index, store } from "../controllers/admissions/admissionController";
const admissionRoute = express.Router();

admissionRoute.get("/", index);
admissionRoute.post("/", store);

export default admissionRoute;
