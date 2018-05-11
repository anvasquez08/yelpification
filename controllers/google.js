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
        .then(response => {
        	let result = googleGeocodeExtraction(response)
        	let {coordinates} = result
        
        	googleMapsClient.placesNearby({
				      language: 'en',
				      location: [coordinates.lat, coordinates.lng],
				      radius: 3000,
				      minprice: 1,
				      maxprice: 4,
				      opennow: true,
				      type: 'restaurant'
				    })
				    .asPromise()
				    .then((response) => {
				    	console.log('this is the places ', response.json.results[0].photos)
						   
						   

				    })
				    .catch(err => console.log(err));


        	res.send(googleGeocodeExtraction(response))
        })
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
  }, 
  test: {
  	get: (req, res) => {
  		googleMapsClient.placesPhoto({
				photoreference: 'CmRaAAAAB5rSH4JS9y64oH4Ik9Z3ysLkd6QQPjS7u0Q024wwxgEw0AYobxu29GmTsmXAkyGB5OBDG_KUgFeRTtQR4_2VQD4yd-Ax2tRMHHULnyabgjNURQuh90SmoAcXgwikSv6BEhDEuaygRnv3RQwvZl7Ks-qQGhQxzXUZseHwh8SFpOrT0XslpucWrw',
				maxwidth: 100,
				maxheight: 100
			})
			.asPromise()
			.then(response => console.log('this is the photo', response))
			.catch(err => console.log(err))
  	}
  }
}


module.exports = googleRoutes

