//user profile 
const router = require('express').Router();
const sequelize = require('../config/connection.js');
const { User, Movie, Shows } = require('../models');
const withAuth = require('../utils/auth');
//routes


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

            Shows.findAll({
                where: { user_id: req.session.user_id },
                attributes: [
                    'title',
                    'genre',
                    'rating',
                    'service'
                ]
            })
                .then(dbShowsData => {
                    const shows = dbShowsData.map(broad => broad.get({ plain: true }));
                    
                    res.render('mylists', { shows, myMovies, loggedIn: true });
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json(err);
                });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;