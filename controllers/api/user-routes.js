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
      .then(dbUserData => res.json(dbUserData))
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

      res.json({ user: dbUserData });

      // Verify user

  });
});

module.exports = router;