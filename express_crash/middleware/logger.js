const moment = require("moment");

const logger = (req, res, next) => {
  console.log(
    `${req.protocol}://${req.hostname}${req.url}: ${moment().format()}`
  );
  next();
};

module.exports = logger;
