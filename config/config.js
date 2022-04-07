require("dotenv").config();

const {
  PORT,
  NODE_ENV = "production",
  MONGO_CLUSTER,
  MONGO_HOST,
  MONGO_PASSWORD,
  MONGO_USER,
} = process.env;

module.exports = {
  PORT,
  NODE_ENV,
  MONGO: {
    CLUSTER: MONGO_CLUSTER,
    HOST: MONGO_HOST,
    PASSWORD: MONGO_PASSWORD,
    USER: MONGO_USER,
  },
};
