const express = require("express");
const movies = require("../../Movies");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    status: "Success",
    requestAt: res.requestAt,
    items: movies.length,
    movies,
  });
});

router.get("/:id", (req, res) => {
  const found = movies.some((movie) => movie.id === parseInt(req.params.id));

  if (found) {
    res.json({
      status: "Success",
      movie: movies.filter((movie) => movie.id === parseInt(req.params.id)),
    });
  } else {
    res.status(400).json({
      status: "400",
      msg: `Bad request! User with ${parseInt(req.params.id)} donot exist`,
    });
  }
});

router.post("/", (req, res) => {
  let newMovie = Object.assign(req.body);
  movies.push(newMovie);
  res.send({
    status: "Success",
    movies,
  });
});

router.put("/:id", (req, res) => {
  const found = movies.some((movie) => movie.id === parseInt(req.params.id));

  if (found) {
    const updatedData = req.body;
    movies.forEach((movie) => {
      if (movie.id === parseInt(req.params.id)) {
        movie.id = updatedData.id ? updatedData.movie : movie.id;
        movie.title = updatedData.title ? updatedData.title : movie.title;
        movie.year = updatedData.year ? updatedData.year : movie.year;
        movie.runtime = updatedData.runtime
          ? updatedData.runtime
          : movie.runtime;
        movie.genres = updatedData.genres ? updatedData.genres : movie.genres;
        movie.director = updatedData.director
          ? updatedData.director
          : movie.director;

        res.json({
          status: "Success",
          movie,
        });
      }
    });
  } else {
    res.status(400).json({
      status: "Bad request",
      msg: `Movie with id ${parseInt(req.params.id)} not exist`,
    });
  }
});

router.delete("/:id", (req, res) => {
  const found = movies.some((movie) => movie.id === parseInt(req.params.id));

  if (found) {
    res.json({
      status: "Success",
      movies: movies.filter((movie) => movie.id != parseInt(req.params.id)),
    });
  } else {
    res.status(400).json({
      status: "400",
      msg: `Bad request! User with ${parseInt(req.params.id)} donot exist`,
    });
  }
});

module.exports = router;
