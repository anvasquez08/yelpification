const helpers = {
	googleAddressFormatter: (address, zipcode) => {
		return 'address='+ address.split(' ').join('+') + '+' + zipcode
	}, 
	googleGeocodeExtraction: (json) => {
		return  {
			fulladdress: json.data.results[0].formatted_address,
			coordinates: json.data.results[0].geometry.location
		}
	}
}


module.exports = helpers