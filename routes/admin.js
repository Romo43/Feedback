const { Router } = require("express");
const router = Router();

router.post("/login", (req, res) => {
    res.send("Admin route");
});
router.get("/home", (req, res) => {
  res.send("Admin page");
});

module.exports = router;
