const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const movieRoutes = require('./movie-routes.js');
const showRoutes = require('./shows-routes.js');

router.use('/users', userRoutes);
router.use('/movies', movieRoutes);
router.use('/shows', showRoutes);


module.exports = router;
