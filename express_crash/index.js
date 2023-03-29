const { port } = require("./config");
const express = require("express");
const path = require("node:path");
const logger = require("./middleware/logger");
const { urlencoded } = require("express");
const exphbs = require("express-handlebars");
const members = require("./Members");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
// Middleware
// app.use(logger);

app.get("/", (req, res) => {
  res.render("index", {
    title: "Member App",
    members,
  });
});

app.use(express.json());
app.use(urlencoded({ extended: false }));

// Set Static Folder
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/members", require("./routes/api/members"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
