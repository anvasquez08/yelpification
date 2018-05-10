const axios = require('axios');
const {Google_API} = require('../config.js')
const {googleAddressFormatter, googleGeocodeExtraction} = require('./helpers.js')
const googleMapsClient = require('@google/maps').createClient({
  key: Google_API,
  Promise: Promise
});

const googleRoutes= {
  geocode: { 
    post: function(req, res) { 
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?${googleAddressFormatter(req.body.address, req.body.zipcode)}&key=${Google_API}`)
        .then(response => res.send(googleGeocodeExtraction(response)))
        .catch(err => console.log(err))
    }
  }, 
  places: {
  	post: (req, res) => {
  		console.log('this is req.body', req.body)

  		const {input, lat, lng} = req.body
  		console.log(input, 'is input')
   		console.log(lat, 'is lat')
   		console.log(lng, 'is lng')
	    googleMapsClient.placesAutoComplete({
	      input: input,
	      language: 'en',
	      location: [lat, lng],
	      radius: 10,
	      components: {country: 'us'}
	    })
	  	.asPromise()
	  	.then(response => {
	  		// let data = {
	  		// 	place: response.json.predictions[0].description, 
	  		// 	place_id:response.json.predictions[0].place_id
	  		// } 
	  		// res.send(data)
	  		res.send(response.json.predictions)
	  	}) 
	  	.catch(err => res.send(err))
	  }
  }	
}


module.exports = googleRoutes

