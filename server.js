// Main Express Server

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import API from "endpoints";
import RUN from "run";
import TABLES from "tables";
import VERIFY_TOKEN from "middlewares/verify-token";

const app = express();
const path = __dirname;
const publicFolder = path + "/files";

// Middlewares
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(helmet());
app.use(morgan("dev"));
app.use("/public", express.static(publicFolder));
app.use("*", VERIFY_TOKEN);

// Test root endpoint
app.get("/", (req, res) => {
  res.json({ success: 200 });
});

// Set Endpoint here
app.get("/api", API);

TABLES.init();
RUN.server(app);
