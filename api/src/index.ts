import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import admissionRoute from "./routes/admissionRoute";
import adminRoute from "./routes/adminRoute";
dotenv.config();
const app = express();
const corsOptions = {
  origin: "*",
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));

const baseUrl = "/kjr/api/v1";
// routes
app.use(`${baseUrl}/admin/`, adminRoute);
app.use(`${baseUrl}/admissions`, admissionRoute);

app.listen(process.env.PORT, () => {
  console.log("listening to port ", process.env.PORT);
});
