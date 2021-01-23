const express = require('express');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');
const router = express.Router();

//GET movies/:id/edit
router.get("/movies/:id/edit", (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      console.log(movie);
      res.render('../views/movies/edit.hbs', {movie});
    })
    .catch((err) => {
      console.log(err);
      next()
    })
});

//GET celebrities/:id/edit
router.get("/celebrities/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((celeb) => {
      console.log(celeb);
      res.render('../views/celebrities/edit.hbs', {celeb});
    })
    .catch((err) => {
      console.log(err);
      next()
    })
});

//POST movies/:id/delete
router.post("/movies/:id/delete", (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect('/movies')
    })
    .catch((err) => {
      next();
      return err;
    })
});

//POST celebrities/:id/delete
router.post("/celebrities/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect('/celebrities')
    })
    .catch((err) => {
      next();
      return err;
    })
});

//GET movies/new
router.get("/movies/new", (req, res, next) => {
  res.render('../views/movies/new.hbs');
});

//GET celebrities/new
router.get("/celebrities/new", (req, res, next) => {
  res.render('../views/celebrities/new.hbs');
});

//POST movies/:id
router.post("/movies/:id", (req, res, next) => {
 const { title, genre, plot } = req.body;
 Movie.findByIdAndUpdate(req.params.id, { title, genre, plot })
   .then(() => {
     res.redirect("/movies");
   })
   .catch((err) => {
     console.log(err);
     next();
   });
});

//POST celebrities/:id
router.post("/celebrities/:id", (req, res, next) => {
 const { name, occupation, catchPhrase } = req.body;
 Celebrity.findByIdAndUpdate(req.params.id, { name, occupation, catchPhrase })
   .then(() => {
     res.redirect("/celebrities");
   })
   .catch((err) => {
     console.log(err);
     next();
   });
});

//GET movies/:id
router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      console.log(movie);
      res.render('../views/movies/show.hbs', {movie});
    })
    .catch((err) => {
      console.log(err);
      next()
    })
});

//GET celebrities/:id
router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((celeb) => {
      console.log(celeb);
      res.render('../views/celebrities/show.hbs', {celeb});
    })
    .catch((err) => {
      console.log(err);
      next()
    })
});

//POST movies/
router.post("/movies", (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movie.create({ title, genre, plot })
    .then((movieCreated) => {
       res.redirect("/movies");
    })
    .catch(() => res.render("../views/movies/new.hbs"))
});

//POST celebrities/
router.post("/celebrities", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
    .then((celebCreated) => {
       res.redirect("/celebrities");
    })
    .catch(() => res.render("../views/celebrities/new.hbs"))
});

//GET movies
router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((movies) => {
      console.log(movies);
      res.render('../views/movies/index.hbs', {movies});
    })
    .catch((err) => {
      console.log(err);
      next()
    })
});

//GET celebrities
router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then((celebs) => {
      console.log(celebs);
      res.render('../views/celebrities/index.hbs', {celebs});
    })
    .catch((err) => {
      console.log(err);
      next()
    })
});

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
