const router = require('express').Router();
const user = require('./user.js');
const preferences = require('./preferences.js');
const yelp = require('./yelp.js');
const google = require('./google.js')

router.get('/preferences/:username', preferences.search.get);  				  
router.post('/preferences/:username', preferences.add.post);   				  
router.delete('/preferences/:username/:yelpID', preferences.delete.delete);  

router.post('/geocode', google.geocode.post); 
router.post('/places', google.places.post);

router.post('/searchPlaces/', yelp.searchPlaces.post);   			          
router.post('/searchId/:id', yelp.searchId.post);  

module.exports = router;
