const { Router } = require("express");
const router = Router();
const { check } = require("express-validator");
const { validateFields } = require("../middlewares");
const { login } = require("../controllers/admin");

router.post(
  "/login",
  [
    check("email", "The email is obligatory").isEmail(),
    check("password", "The password is obligatory").not().isEmpty(),
    validateFields,
  ],
  login
);

module.exports = router;
