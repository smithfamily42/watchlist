const router = require('express').Router();
const { Movie } = require("../../models");


// get all movies
router.get('/', (req, res) => {
    Movie.findAll({})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//add a movie
router.post('/', (req, res) => {
    //needs title, genre, rating, studio, user_id
    Movie.create({
        title: req.body.title,
        genre: req.body.genre,
        rating: req.body.rating,
        studio: req.body.studio,
        user_id: req.session.user_id
    })
    .then(dbMovieData => res.json(dbMovieData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

    //update
    //this route is movie/:id
    router.put('/:id', (req, res) => {
        Movie.update(
            {
                title: req.body.title
            },
            {
                where: {
                    id: req.params.id
                }
            }
        )
            .then(dbPostData => {
                if (!dbPostData) {
                    res.status(404).json({ message: 'No post found with this id' });
                    return;
                }
                res.json(dbPostData);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    });


    //delete
    //this route is movie/:id
    router.delete('/:id', (req, res) => {
        Movie.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(dbPostData => {
                if (!dbPostData) {
                    res.status(404).json({ message: 'No post found with this id' });
                    return;
                }
                res.json(dbPostData);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    });

    module.exports = router;