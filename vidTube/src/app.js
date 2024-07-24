import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import healthCheckRoute from "./routes/health-check.route.js";

const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    }),
);
app.use(express.static("public"));
app.use(bodyParser.json({ limit: "20kb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "20kb" }));

app.use("/api/v1/health", healthCheckRoute);
export default app;
