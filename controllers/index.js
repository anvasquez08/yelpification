const router = require('express').Router();
const user = require('./user.js');
const preferences = require('./preferences.js');


router.post('/signup', user.signup.post);
router.post('/login', user.login.post);
router.get('/preferences/:username', preferences.search.get);

module.exports = router;
