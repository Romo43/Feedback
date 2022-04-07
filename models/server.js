const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { dbConnection } = require("../database/database");
const { PORT } = require("../config/config");
const { feedRouter } = require("../routes");

module.exports = class Server {
  constructor() {
    this.app = express();
    this.port = PORT;
    this.paths = {
      feed: "/api/feed",
    };
    this.Database();
    this.Middlewares();
    this.Routes();
  }

  async Database() {
    await dbConnection();
  }

  Middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());
    this.app.use(morgan("dev"));
  }

  Routes() {
    this.app.use(`${this.paths.feed}`, feedRouter);
  }

  Listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
};
