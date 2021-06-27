const router = require('express').Router();;
const { Movie } = require("../../models");

Movie.create

//this route is movie/
router.post('/', (req, res) => {
    // expects {title: 'austin powers', genre: 'spoof', rating: 'PG-13', studio:'New Line Cinema/ Warner Bros.'}
    Movie.create({
        title: req.body.title,
        genre: req.body.genre,
        rating: req.body.rating,
        studio: req.body.studio
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


//update
//this route is movie/:id
router.put('/:id', (req, res) => {
    Movie.update(
        {
            title: req.body.title
        },
        {
            where: {
                id: req.session.user_id
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
            id: req.session.user_id
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