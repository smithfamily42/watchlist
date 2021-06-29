const sequelize = require('../config/connection');
const { Shows } = require('../models');

const showdata = [
  {
    title: 'Loki',
    genre: 'action',
    rating: 'tv-14',
    service: 'Disney+',
    user_id: 1
  },
  {
    title: 'Sweet Tooth',
    genre: 'action',
    rating: 'tv-14',
    service: 'Netflix',
    user_id: 2
  },
  {
    title: 'The Handmaids Tale',
    genre: 'drama',
    rating: 'vt-ma',
    service: 'Hulu',
    user_id: 3
  },
  {
    title: 'Manifest',
    genre: 'drama',
    rating: 'tv-14',
    service: 'NBC',
    user_id: 1
  },
  {
    title: 'Mare of Easttown',
    genre: 'crime',
    rating: 'tv-ma',
    service: 'HBO',
    user_id: 4
  },
  {
    title: 'Lupin',
    genre: 'action',
    rating: 'tv-ma',
    service: 'Netflix',
    user_id: 2
  },
  {
    title: 'Friends',
    genre: 'comedy',
    rating: 'tv-pg',
    service: 'HBO max',
    user_id: 1
  },
  {
    title: 'Game of Thrones',
    genre: 'action',
    rating: 'tv-ma',
    service: 'HBO max',
    user_id: 4
  },
  {
    title: 'The Walking Dead',
    genre: 'horror',
    rating: 'tv-14',
    service: 'AMC',
    user_id: 5
  },
  {
    title: 'Greys Anatomy',
    genre: 'drama',
    rating: 'tv-14',
    service: 'ABC',
    user_id: 1
  }
];

const seedShows = () => Shows.bulkCreate(showdata, {individualHooks: true});

module.exports = seedShows;