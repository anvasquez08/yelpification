const router = require('express').Router();
const user = require('./user.js');
const preferences = require('./preferences.js');
const yelp = require('./yelp.js');
const google = require('./google.js')

router.post('/signup', user.signup.post);					   				  //1
router.post('/login', user.login.post);						   				  //2
router.get('/preferences/:username', preferences.search.get);  				  //3
router.post('/preferences/:username', preferences.add.post);   				  //4
router.delete('/preferences/:username/:yelpID', preferences.delete.delete);   //5

router.post('/geocode', google.geocode.post); 
router.post('/places', google.places.post);

router.post('/autocomplete/', yelp.autocomplete.post);   
router.post('/searchPlaces/', yelp.searchPlaces.post);   			          //6

module.exports = router;
