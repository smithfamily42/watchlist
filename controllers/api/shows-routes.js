const router = require('express').Router();
const { Shows } = require("../../models");

// get all shows
router.get('/', (req, res) => {
    Shows.findAll({})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//this route is shows/
router.post('/', (req, res) => {
    // expects {title: 'austin powers', genre: 'spoof', rating: 'PG-13', studio:'New Line Cinema/ Warner Bros.'}
    Shows.create({
        title: req.body.title,
        genre: req.body.genre,
        rating: req.body.rating,
        service: req.body.service,
        user_id: req.session.user_id
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
//this route is shows/:id
router.put('/:id', (req, res) => {
    Shows.update(
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
//this route is shows/:id
router.delete('/:id', (req, res) => {
    Shows.destroy({
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