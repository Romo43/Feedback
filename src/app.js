import express from "express";
import morgan from "morgan";
import cors from "cors";
import "./database/database.js";
import { PORT } from "./config/config.js";
import feedRoutes from "./routes/feed.js";

// Init express
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

// Routes
app.use("/api/feedback", feedRoutes);
// 404
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});
// Error handler
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
