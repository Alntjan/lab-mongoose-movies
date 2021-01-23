require("dotenv").config();

require("../configs/db.config");

const mongoose = require("mongoose");

/* const Celebrity = require("../models/Celebrity"); */
/* 
const celebrities = [
  {
    name: "Julio Couve",
    occupation: "masterbaiter",
    catchPhrase: "estas todo Filipado",
  },
  {
    name: "Fu Dias",
    occupation: "Miss Understood",
    catchPhrase: "Want some ",
  },
  {
    name: "Ulabrita Frita Smita",
    occupation: "Devil",
    catchPhrase: "Hot dady hot",
  },
];
Celebrity.create(celebrities)
  .then((celebritiesFromDB) => {
    console.log(`Created ${celebritiesFromDB.length} celebrities`);
    mongoose.connection.close();
  })
  .catch((err) =>
    console.log(`An error occurred while creating drones from the DB: ${err}`)
); */

const Movie = require("../models/Movie");

const movies = [
  {
    title: "magic hole",
    genre: "Romantic comedy",
    plot: "U dont wana know",
  },
  {
    title: "String",
    genre: "Geek",
    plot: "Spider learns how to code",
  },
  {
    title: "Number",
    genre: "pew pew",
    plot: "The exiting life of Albertus One Rock",
  },
];
Movie.create(movies)
  .then((moviesFromDB) => {
    console.log(`Created ${moviesFromDB.length} celebrities`);
    mongoose.connection.close();
  })
  .catch((err) =>
    console.log(`An error occurred while creating movies from the DB: ${err}`)
  );
