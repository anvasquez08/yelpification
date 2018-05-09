const {Google_API} = require('../config.js')
const axios = require('axios');
const {googleAddressFormatter, googleGeocodeExtraction} = require('./helpers.js')
// const googleGeocodeExtraction = require('./helpers.js')

const googleRoutes= {
  geocode: { 
    post: function(req, res) { 
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?${googleAddressFormatter(req.body.address, req.body.zipcode)}&key=${Google_API}`)
        .then(response => res.send(googleGeocodeExtraction(response)))
        .catch(err => console.log(err))
    }
  }
}


module.exports = googleRoutes

