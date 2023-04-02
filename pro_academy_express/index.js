const express = require("express");
const movies = require("./Movies");
const logger = require("./middleware/logger");
const requestAt = require("./middleware/requestAt");
const morgan = require("morgan");

const app = express();

//middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(logger);
app.use(requestAt);

app.use(express.static("./public"));
app.use("/api/movies", require("./routes/api/movies"));

module.exports = app;
