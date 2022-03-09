const { Router } = require("express");
const { check } = require("express-validator");
const { validateFields, validateJWT } = require("../middlewares");
const { getComments, createComment, updateStatus } = require("../controllers/comment");

const router = Router();

router.get("/comments", [validateJWT], getComments);

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

router.put("/status/:id", [validateJWT], updateStatus);

module.exports = router;
