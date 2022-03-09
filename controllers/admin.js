const Admin = require("../models/admin");
const { generateJWT } = require("../helpers");

const login = async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });
  if (!admin) {
    return res.status(401).send({ error: "User not found" });
  }
  const isPasswordValid = await Admin.comparePassword(password, admin.password);
  if (!isPasswordValid) {
    return res.status(401).send({ error: "Invalid password" });
  }
  const token = await generateJWT(admin.uid);
  return res.json({
    token
  });
};

module.exports = { login };
