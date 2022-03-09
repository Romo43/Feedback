const { Router } = require("express");
const router = Router();
const { login } = require("../controllers/admin");

router.post("/login", login);
router.get("/home", (req, res) => {
  res.send("Admin page");
});

module.exports = router;
