const router = require('express').Router();
const sequelize = require('../config/connection');

// get all posts for homepage
// users email and pw - must log in before using the site

//Mock Data until db is connected
const movies = [
  {
    title: 'Transformers',
    genre: 'action',
    rating: 'PG-13',
    studio: 'Paramount'
  },
  {
    title: 'The Matrix',
    genre: 'action',
    rating: 'R',
    studio: 'Warner Bros.'
  },
  
];

const shows = [
    {
      title: 'Lupin',
      genre: 'action',
      rating: 'TV-14',
      service: 'Netflix'
    },
    {
      title: 'Dave',
      genre: 'Comedy',
      rating: 'MA',
      service: 'Hulu'
    },
    
  ];

router.get('/', (req, res) => {
  const data = {
    pageTitle: 'Homepage'
  };
  res.render('index', data);
});


router.get('/login', (req, res) => {
  const data = {
    pageTitle: 'Account'
  };
  res.render('login', data);
});

router.get('/shows', (req, res) => {
  const data = {
    shows: [],
    pageTitle: 'Shows',
  };
  for (let i = 0; i < shows.length; i++) { //For now shows is not defined. Needs to somehow connect it to the db
    let currentShow = shows[i];
    data.shows.push(currentShow);
  };
  res.render('shows', data);
});

router.get('/movies', (req, res) => {
  const data = {
    movies: [],
    pageTitle: 'Movies',
  };
  for (let i = 0; i < movies.length; i++) {
    let currentMovie = movies[i];
    data.movies.push(currentMovie);
  };
  res.render('movies', data);
});

router.get('/mylist', (req, res) => { // This is a new route to put both movies and shows on the same page. needs to be connected to Sequelize
  const data = {
    movies: [],
    shows: [],
    pageTitle: 'My List',
  };
  for (let i = 0; i < movies.length; i++) {
    let currentMovie = movies[i];
    data.movies.push(currentMovie);
  };
  for (let i = 0; i < shows.length; i++) { //For now shows is not defined. Needs to somehow connect it to the db
    let currentShow = shows[i];
    data.shows.push(currentShow);
  };
  res.render('mylist', data);
})

router.post('/', (req, res) => {

});

router.delete('/:id', (req, res) => {

});



module.exports = router;


//Renders to show what page we're on
//api routes deliver info from DB or third party apis