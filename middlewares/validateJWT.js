const jwt = require("jsonwebtoken");
const { SECRET } = require("../config/config");

const validateJWT = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (token) {
    jwt.verify(token, SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).send({ error: "Failed to authenticate token" });
      }
      req.user = decoded;
      next();
    });
  } else {
    return res.status(401).send({ error: "No token provided" });
  }
};

module.exports = { validateJWT };
