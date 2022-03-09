const { Router } = require("express");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares");

const router = Router();

const { createComment } = require("../controllers/comment");

router.post(
  "/create",
  [
    check("title", "The title is obligatory").not().isEmpty(),
    check("description", "The description is obligatory").not().isEmpty(),
    check(
      "description",
      "The description must be at least 10 characters"
    ).isLength({ min: 10 }),
    check(
      "description",
      "The description must be at most 300 characters"
    ).isLength({ max: 300 }),
    check("title", "The title must be a string").isString(),
    check("description", "The description must be a string").isString(),
    validateFields,
  ],
  createComment
);

module.exports = router;
