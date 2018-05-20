const router = require('express').Router();
const user = require('./user.js');
const preferences = require('./preferences.js');
const yelp = require('./yelp.js');
const google = require('./google.js')

router.post('/login', user.login.post);
router.post('/signup', user.signup.post);

router.get('/preferences/:username', preferences.search.get);  				  
router.post('/preferences/:username', preferences.add.post);   				  
router.delete('/preferences/:username/:id', preferences.delete.delete);  

router.post('/geocode', google.geocode.post); 
router.post('/places', google.places.post);

router.post('/searchPlaces/', yelp.searchPlaces.post);   			          
router.post('/searchId/:id', yelp.searchId.post);  
router.post('/searchName', yelp.searchName.post);  

module.exports = router;
