// Main Express Server

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { API } from "./endpoints/test";
import Run from "./run";

const app = express();
const path = __dirname;
const publicFolder = path + "/files";
const RUN = new Run();

// Middlewares
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan("dev"));
app.use("/public", express.static(publicFolder));

// Test root endpoint
app.get("/", (req, res) => {
  res.json({ success: 200 });
});

// Set here endpoint and API modules
app.get("/api", API);

RUN.server(app);
