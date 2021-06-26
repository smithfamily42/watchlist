//user profile 
const router = require('express').Router();
const { User, Movie, Show } = require('../models');
//routes

//this route is /dashboard/
router.get('/', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        //what we want to pull out of here
        where: {
            id: req.session.user_id
            //cookie session for the correct user
        },
        include: [
            {
                model: Movie
                // attributes only needed for pulling specific columns
                //if you want ALL then just do model
            },
            {
                model: Show
            }
        ]
        
    })
    .then(dbUserData => {
        //! means false = not true
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.render('dashboard', {
            data: dbUserData,
            loggedIn: req.session.loggedIn,
            username: req.session.username
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;