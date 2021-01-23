require("dotenv").config();

// const celebs = [
//     {
//         name: 'Manel',
//         occupation: 'singer',
//         catchPhrase: 'yey'
//     },
//     {
//         name: 'Maria',
//         occupation: 'actress',
//         catchPhrase: 'yay'
//     },
//     {
//         name: 'Alcina',
//         occupation: 'comedian',
//         catchPhrase: 'yoy'
//     }
// ];

// const mongoose = require('mongoose');
// const Celeb = require("../models/Celebrity.js");
// mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`, {
//   useCreateIndex: true,
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// Celeb.create(celebs)
//     .then(celebs => console.log(`Created ${celebs.length} celebs`))
//     .catch(err => console.log(`An error ocurred while creating celebs from the DB: ${err}`))

const movies = [
  {
    title: "Movie Fake 1",
    genre: "comedy",
    plot: "lorem ipsum",
  },
  {
    title: "Movie Fake 2",
    genre: "drama",
    plot: "lorem ipsum 2",
  },
  {
    title: "Movie Fake 3",
    genre: "horror",
    plot: "lorem ipsum 3",
  },
];

const mongoose = require("mongoose");
const Movie = require("../models/Movie.js");
mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

Movie.create(movies)
  .then((movies) => console.log(`Created ${movies.length} movies`))
  .catch((err) =>
    console.log(`An error ocurred while creating movies from the DB: ${err}`)
  );