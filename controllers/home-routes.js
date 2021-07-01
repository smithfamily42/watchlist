const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');


// get all posts for homepage
// users email and pw - must log in before using the site


router.get('/', (req, res) => {
  const data = {
    pageTitle: 'Homepage',
    loggedIn: (req.session.loggedIn)
  };
  if (!req.session.loggedIn) {
    data.loggedIn = false;
  }
  res.render('index', data);
});

//for login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// get all movies
router.get('/', (req, res) => {
  Movie.findAll({
    attributes: [
      'title',
      'genre',
      'rating',
      'studio'
    ]
  })
    .then(dbUserData => res.json(dbUserData))

    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

module.exports = router;


//Renders to show what page we're on
//api routes deliver info from DB or third party apis