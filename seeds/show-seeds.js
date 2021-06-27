const sequelize = require('../config/connection');
const { Show } = require('../models');

const showdata = [
  {
    title: 'Loki',
    genre: 'action',
    rating: 'tv-14',
    service: 'Disney+'
  },
  {
    title: 'Sweet Tooth',
    genre: 'action',
    rating: 'tv-14',
    service: 'Netflix'
  },
  {
    title: 'The Handmaids Tale',
    genre: 'drama',
    rating: 'vt-ma',
    service: 'Hulu'
  },
  {
    title: 'Manifest',
    genre: 'drama',
    rating: 'tv-14',
    service: 'NBC'
  },
  {
    title: 'Mare of Easttown',
    genre: 'crime',
    rating: 'tv-ma',
    service: 'HBO'
  },
  {
    title: 'Lupin',
    genre: 'action',
    rating: 'tv-ma',
    service: 'Netflix'
  },
  {
    title: 'Friends',
    genre: 'comedy',
    rating: 'tv-pg',
    service: 'HBO max'
  },
  {
    title: 'Game of Thrones',
    genre: 'action',
    rating: 'tv-ma',
    service: 'HBO max'
  },
  {
    title: 'The Walking Dead',
    genre: 'horror',
    rating: 'tv-14',
    service: 'AMC'
  },
  {
    title: 'Greys Anatomy',
    genre: 'drama',
    rating: 'tv-14',
    service: 'ABC'
  },
];

const seedShows = () => Show.bulkCreate(showdata, {individualHooks: true});

module.exports = seedShows;