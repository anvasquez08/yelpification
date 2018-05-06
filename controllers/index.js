const user = require('./user.js');
const router = require('express').Router();

router.get('/db', user.db.get);
router.post('/search-places', user.searchPlaces.post);

module.exports = router;
