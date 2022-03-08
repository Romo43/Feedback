const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { PORT, NODE_ENV } = require("../config/config");

module.exports = class Server {
  constructor() {
    this.app = express();
    this.port = PORT;
    this.env = NODE_ENV;
    this.paths = {
      admin: "/api/admin",
    };
    this.Middlewares();
    this.Routes();
  }

  Middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.static("public"));
    this.app.use(cors());
    this.app.use(morgan("dev"));
  }

  Routes() {
    this.app.use(`${this.paths.admin}`, (req, res) => {
      res.send("Hello from admin");
    });
  }

  Listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running from ${this.env} on port ${this.port}`);
    });
  }
};
