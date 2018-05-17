const axios = require('axios');

const helpers = {
	googleAddressFormatter: (address, zipcode) => {
		return 'address='+ address.split(' ').join('+') + '+' + zipcode
	}, 
	googleGeocodeExtraction: (json) => {
		return  {
			fulladdress: json.data.results[0].formatted_address,
			coordinates: json.data.results[0].geometry.location
		}
	}, 
	getHeathRating: (singlePlaceObj) => {
		return axios.get(`https://data.cityofnewyork.us/resource/xx67-kt59.json?$where=dba="${singlePlaceObj.name}"`)
		    .then(response => {
			    if (response.data.length > 0) {
			      singlePlaceObj['healthRating'] = response.data
			      return singlePlaceObj
			    } else {
			      singlePlaceObj['healthRating'] = []
			      return singlePlaceObj
			    }    
		  })
		  .catch(err => console.log('inner error', err))
		}
}

module.exports = helpers