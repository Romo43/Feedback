import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validateFields.js";
import * as feedController from "../controllers/feed.js";

// Create a router
const router = Router();

// Get all feeds
router.get("/feeds", feedController.getAllFeeds);

// Create a feed
router.post(
  "/create",
  [
    check("title", "Title is required").not().isEmpty(),
    check("title", "Title must be string").isString(),
    check("title", "Title must be at most 50 characters").isLength({
      max: 50,
    }),

    check("description", "Description is required").not().isEmpty(),
    check("description", "Description must be string").isString(),
    check("description", "Description must be at most 300 characters").isLength(
      {
        max: 300,
      }
    ),

    check("score", "Score is required").not().isEmpty(),
    check("score", "Score must be an integer").isInt(),
    check("score", "Score must be between 1 and 5").isInt({
      min: 1,
      max: 5,
    }),
    validateFields,
  ],
  feedController.createFeed
);

// Export the router
export default router;
