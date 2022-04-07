const mongoose = require("mongoose");

const { MONGO, NODE_ENV } = require("../config/config");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const [MONGO_LOCAL_HOST, MONGO_CLOUD_HOST] = [
  `mongodb://127.0.0.1:27017/${MONGO.HOST}`,
  `mongodb+srv://${MONGO.USER}:${MONGO.PASSWORD}@${MONGO.CLUSTER}.mongodb.net/${MONGO.HOST}?retryWrites=true&w=majority`,
];

const DB_URI = NODE_ENV === "development" ? MONGO_LOCAL_HOST : MONGO_CLOUD_HOST;

const dbConnection = async () => {
  await mongoose
    .connect(DB_URI, options)
    .then(() => {
      console.log(`Connected to ${NODE_ENV} database`);
    })
    .catch((err) => console.log(err));
};

module.exports = { dbConnection };
