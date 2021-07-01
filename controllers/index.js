const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashRoutes = require('./dashboard-routes')


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/mylists', dashRoutes)


module.exports = router;
