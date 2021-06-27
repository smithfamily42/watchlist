const sequelize = require('../config/connection');
const { Movie } = require('../models');

const moviedata = [
  {
    title: 'Lilo and Stitch',
    genre: 'family',
    rating: 'PG',
    studio: 'Disney'
  },
  {
    title: 'Titanic',
    genre: 'romance',
    rating: 'PG-13',
    studio: 'Fox'
  },
  {
    title: 'Forrest Gump',
    genre: 'drama',
    rating: 'PG-13',
    studio: 'Paramount'
  },
  {
    title: 'Avatar',
    genre: 'action',
    rating: 'PG-13',
    studio: 'Fox'
  },
  {
    title: 'Avengers: Endgame',
    genre: 'action',
    rating: 'PG-13',
    studio: 'Marvel'
  },
  {
    title: 'Citizen Kane',
    genre: 'drama',
    rating: 'PG',
    studio: 'RKO Radio Pictures'
  },
  {
    title: 'Pycho',
    genre: 'horror',
    rating: 'R',
    studio: 'Paramount'
  },
  {
    title: 'Wall-E',
    genre: 'family',
    rating: 'G',
    studio: 'Pixar'
  },
  {
    title: 'Gone with the Wind',
    genre: 'romance',
    rating: 'G',
    studio: 'MGM'
  },
  {
    title: 'Joker',
    genre: 'crime',
    rating: 'R',
    studio: 'Warner Bros'
  },
];

const seedMovies = () => Movie.bulkCreate(moviedata, {individualHooks: true});

module.exports = seedMovies;