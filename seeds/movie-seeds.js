const sequelize = require('../config/connection');
const { Movie } = require('../models');

const moviedata = [
  {
    title: 'Lilo and Stitch',
    genre: 'family',
    rating: 'PG',
    studio: 'Disney',
    user_id: 1
  },
  {
    title: 'Titanic',
    genre: 'romance',
    rating: 'PG-13',
    studio: 'Fox',
    user_id: 2
  },
  {
    title: 'Forrest Gump',
    genre: 'drama',
    rating: 'PG-13',
    studio: 'Paramount',
    user_id: 4
  },
  {
    title: 'Avatar',
    genre: 'action',
    rating: 'PG-13',
    studio: 'Fox',
    user_id: 4
  },
  {
    title: 'Avengers: Endgame',
    genre: 'action',
    rating: 'PG-13',
    studio: 'Marvel',
    user_id: 3
  },
  {
    title: 'Citizen Kane',
    genre: 'drama',
    rating: 'PG',
    studio: 'RKO Radio Pictures',
    user_id: 2
  },
  {
    title: 'Pycho',
    genre: 'horror',
    rating: 'R',
    studio: 'Paramount',
    user_id: 5
  },
  {
    title: 'Wall-E',
    genre: 'family',
    rating: 'G',
    studio: 'Pixar',
    user_id: 1
  },
  {
    title: 'Gone with the Wind',
    genre: 'romance',
    rating: 'G',
    studio: 'MGM',
    user_id: 2
  },
  {
    title: 'Joker',
    genre: 'crime',
    rating: 'R',
    studio: 'Warner Bros',
    user_id: 3
  },
];

const seedMovies = () => Movie.bulkCreate(moviedata, {individualHooks: true});

module.exports = seedMovies;