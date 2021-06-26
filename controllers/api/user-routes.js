const router = require('express').Router();
const { User } = require('../../models');

// get all users
router.get('/', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



router.post('/', (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
    //promises 
    //.then stores good information and sends it to the front end
    .then(dbUserData => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
        res.status(200).json(dbUserData);
        //sends info after it's created a brand new user
      });
    })
    //.catch picks up the error and sends it to the front end
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



// the route should be /api/user/login
router.post('/login', (req, res) => {
  // expects {email: 'lernantino@gmail.com', password: 'password1234'}
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }
    //cookie session for returning user
    req.session.save(() => {
      // declare session variables
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/logout', (req,res) => {

})

//need log out route to destroy cookie session
//https://courses.bootcampspot.com/courses/563/pages/14-dot-2-6-add-logic-to-destroy-the-session?module_item_id=161959
  module.exports = router;