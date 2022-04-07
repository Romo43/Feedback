require("dotenv").config();

const {
  PORT,
  NODE_ENV,
  MONGO_CLUSTER,
  MONGO_HOST,
  MONGO_PW,
  MONGO_USER,
} = process.env;

module.exports = {
  PORT,
  NODE_ENV,
  MONGO: {
    CLUSTER: MONGO_CLUSTER,
    HOST: MONGO_HOST,
    PASSWORD: MONGO_PW,
    USER: MONGO_USER,
  },
};
