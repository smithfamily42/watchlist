const router = require('express').Router();
const sequelize = require('../config/connection');

// get all posts for homepage
// users email and pw - must log in before using the site


router.get('/', (req, res) => {
  const data = {
    pageTitle: 'Homepage'
  };
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


module.exports = router;


//Renders to show what page we're on
//api routes deliver info from DB or third party apis