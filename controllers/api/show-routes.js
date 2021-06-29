const router = require('express').Router();
const { Show } = require("../../models");

Show.create
// get all shows
router.get('/', (req, res) => {
    Show.findAll({})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//this route is show/
router.post('/', (req, res) => {
    // expects {title: 'austin powers', genre: 'spoof', rating: 'PG-13', studio:'New Line Cinema/ Warner Bros.'}
    Show.create({
        title: req.body.title,
        genre: req.body.genre,
        rating: req.body.rating,
        service: req.body.service
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
//this route is show/:id
router.put('/:id', (req, res) => {
    Show.update(
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
//this route is show/:id
router.delete('/:id', (req, res) => {
    Show.destroy({
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