//user profile 
const router = require('express').Router();
const sequelize = require('../config/connection.js');
const { User, Movie, Shows } = require('../models');
const withAuth = require('../utils/auth');
//routes

/*
router.get('/', withAuth, (req, res) => {
    Movie.findAll({
        where: { user_id: req.session.user_id },
        attributes: [
            'title',
            'genre',
            'rating',
            'studio'
        ]
    })
        .then(dbUserData => {
            const myMovies = dbUserData.map(broad => broad.get({ plain: true }));
            console.log(myMovies);
            res.render('mylists', { myMovies, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.get('/', withAuth, (req, res) => {
    Shows.findAll({
        where: { user_id: req.session.user_id },
        attributes: [
            'title',
            'genre',
            'rating',
            'service'
        ]
    })
        .then(dbUserData => {
            const shows = dbUserData.map(broad => broad.get({ plain: true }));
            const data = {
                movies: [],
                shows: [],
                pageTitle: 'My Lists',
            };
            for (let i = 0; i < movies.length; i++) {
                let currentMovie = movies[i];
                data.movies.push(currentMovie);
            };
            for (let i = 0; i < shows.length; i++) { //For now shows is not defined. Needs to somehow connect it to the db
                let currentShow = shows[i];
                data.shows.push(currentShow);
            };
            res.render('mylists', { shows, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
*/

//this route is /dashboard/
router.get('/', withAuth, (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        //what we want to pull out of here
        where: {
            id: req.session.user_id
            //cookie session for the correct user
        },
        include: [
            {
                model: Movie,
                attributes: [
                    'title',
                    'genre',
                    'rating',
                    'studio'
                ]
            },
            {
                model: Shows,
                attributes: [
                    'title',
                    'genre',
                    'rating',
                    'service'
                ]
            }
        ]

    })
        .then(dbUserData => {
            //! means false = not true
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.render('mylists', {
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