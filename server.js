/**
 * Main Express Server
 */
import express from "express";
import morgan from "morgan";
import { API } from "./endpoints/test";

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ success: 200 });
});

app.get("/api", API);

app.listen("3000", "127.0.0.1", () => {
  console.log("STATUS::SUCCESS");
});
