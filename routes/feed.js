const { Router } = require("express");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares");
const { getAllFeeds, createFeed } = require("../controllers/feed");

const router = Router();

router.get("/all", getAllFeeds);

router.post(
  "/create",
  [
    check("title", "The title is obligatory").not().isEmpty(),
    check("title", "The title must be string").isString(),
    check("title", "The feed must be at most 50 characters").isLength({
      max: 50,
    }),

    check("feed", "The feed is obligatory").not().isEmpty(),
    check("feed", "The feed must be string").isString(),
    check("feed", "The feed must be at most 300 characters").isLength({
      max: 300,
    }),

    check("score", "The score is obligatory").not().isEmpty(),
    check("score", "The score must be an integer").isInt(),
    check("score", "The score must be between 1 and 5").isInt({
      min: 1,
      max: 5,
    }),
    validateFields,
  ],
  createFeed
);

module.exports = router;
