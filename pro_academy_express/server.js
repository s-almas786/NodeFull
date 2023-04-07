const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

const app = require("./index");

mongoose
  .connect(process.env.CONN_STR, {
    useNewUrlParser: true,
  })
  .then((connec) => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.log("An error occured");
  });

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    unique: true,
  },
  year: Number,
  runtime: {
    type: Number,
    required: [true, "Runtime is required"],
  },
  director: String,
  rating: {
    type: Number,
    default: 1.0,
  },
});

const Movie = mongoose.model("Movies", movieSchema);

const testMovie = new Movie({
  title: "Beetlejuice",
  year: "1988",
  runtime: "92",
  director: "Tim Burton",
  rating: 5.0,
});

testMovie
  .save()
  .then((movie) => console.log(movie))
  .catch((err) => console.log("Error saving movie " + err));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listning on the port ${PORT}`);
});
