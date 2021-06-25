const router = require('express').Router();
const sequelize = require('../config/connection');

// get all posts for homepage
// users email and pw - must log in before using the site
router.get('/', (req, res) => {
  console.log('Breath... Encourage your teammates... Breath... Repeat...');
  
  res.render('homepage', {});
});


router.get('/', (req, res) => {

});

router.post('/', (req, res) => {

});

router.delete('/:id', (req, res) => {

});



module.exports = router;


//Renders to show what page we're on
//api routes deliver info from DB or third party apis