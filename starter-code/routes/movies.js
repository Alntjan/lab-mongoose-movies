const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

router.get("/movies/:id/edit", (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      res.render("movies/editMovie", { movie: movie });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/movies/:id/edit", (req, res, next) => {
  Movie.findByIdAndUpdate(req.params.id, req.body)
    .then((movie) => {
      console.log(movie);
      res.redirect("/movies");
    })
    .catch((err) => {
      console.log("error when updating");
      console.log(err);
    });
});

router.post("/movies/:id/delete", (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect("/movies");
    })
    .then((err) => {
      return err;
    });
});

router.get("/movies/new", (req, res, next) => {
  res.render("movies/newMovie");
});

router.post("/movies/new", (req, res, next) => {
  console.log(req.body);
  Movie.create(req.body)
    .then((movie) => {
      console.log(movie);
      res.redirect("/movies");
    })
    .catch(() => {
      console.log("error when creating a new movie");
    });
});

router.get("/movies/:id", (req, res) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      console.log(movie);
      res.render("movies/eachMovie", { movie: movie });
    })
    .catch((err) => {
      console.log("Mother fucker");
    });
});

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((movies) => {
      console.log(movies);
      res.render("movies/moviesList", { movies: movies });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
