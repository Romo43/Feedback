import express from "express";
import morgan from "morgan";
import cors from "cors";
import feedRoutes from "./routes/feed.js";
import { PORT } from "./config.js";

// Init express
const app = express();

app.set("port", PORT);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

// Routes
app.use("/api/feedback", feedRoutes);

//Export app
export default app;
