const express = require("express");
const { get } = require("mongoose");
const router = express.Router();
const Celebrity = require("../models/Celebrity");
/* GET home page */

router.get("/celebrities/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((celeb) => {
      res.render("celebrities/edit", { celeb: celeb });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/celebrities/:id/edit", (req, res, next) => {
  Celebrity.findByIdAndUpdate(req.params.id, req.body)
    .then((celeb) => {
      console.log(celeb);
      res.redirect("/celebrities");
    })
    .catch((err) => {
      console.log("error when updating");
      console.log(err);
    });
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect("/celebrities");
    })
    .then((err) => {
      return err;
    });
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/celebrities/new", (req, res, next) => {
  console.log(req.body);
  Celebrity.create(req.body)
    .then((celeb) => {
      console.log(celeb);
      res.redirect("/celebrities");
    })
    .catch(() => {
      console.log("error when creating a new celebritie");
    });
});

router.get("/celebrities/:id", (req, res) => {
  Celebrity.findById(req.params.id)
    .then((celebritie) => {
      console.log(celebritie);
      res.render("celebrities/eachCelebrities", { celebritie: celebritie });
    })
    .catch((err) => {
      console.log("mother fucker");
    });
});

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => {
      console.log(celebrities);
      res.render("celebrities/index", { celebrities: celebrities });
    })
    .catch((err) => {
      console.log(err);
    });
});


module.exports = router;
