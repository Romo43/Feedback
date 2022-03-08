require("dotenv").config();

const { MONGO_HOST, MONGO_PW, MONGO_USER, NODE_ENV, PORT, SECRET } =
  process.env;

module.exports = {
  MONGO_HOST,
  MONGO_PW,
  MONGO_USER,
  NODE_ENV,
  PORT,
  SECRET,
};
