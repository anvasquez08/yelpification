const {Google_API} = require('../config.js')
const axios = require('axios');

const googleRoutes= {
  geocode: {
    post: function(req, res) { 
      const {address} = res
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address==1600+Amphitheatre+Parkway&key=${Google_API}`)
        .then(response => console.log(res.send(response.data.results[0].geometry.location)))
        .catch(err => console.log(err))
    }
  }
}

  module.exports = googleRoutes
