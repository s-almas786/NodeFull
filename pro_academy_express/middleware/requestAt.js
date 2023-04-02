const moment = require("moment");

const requestAt = (req, res, next) => {
  res.requestAt = moment().format();
  next();
};

module.exports = requestAt;
