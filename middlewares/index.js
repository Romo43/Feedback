const validateFields = require("../middlewares/validateFields");
const validateJWT = require("../middlewares/validateJWT");

module.exports = {
  ...validateFields,
  ...validateJWT,
};
