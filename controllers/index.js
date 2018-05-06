const user = require('./user.js');
const router = require('express').Router();

router.post('/signup', user.signup.post);
router.post('/login', user.login.post);

module.exports = router;
