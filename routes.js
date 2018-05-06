var controller = require('./controllers');
var router = require('express').Router();

//1) User enters text; Yelp API autocompletes
router.get('/autocomplete', controller.auto.get);

//2) User selects business type; Yelp API returns list of matches
router.get('/placesbyname', controller.places.get);

//3) User selects business to view details; Yelp API returns details 
router.get('/bizdetails', controller.business.get);

//4) User saves a place to db
router.post('/saveplace', controller.save.post);

//5) User asks to login page 
router.get('/login', controller.login.get);

//6) User wants to create an account 
router.post('/sign-up', controller.signup.post);

module.exports = router;
