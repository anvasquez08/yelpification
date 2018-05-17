const axios = require('axios'); 
const { getHeathRating, fetchBusinessDetails, fetchReviews, fetchClosestBusinesses } = require('./helpers.js')

const yelpRoutes= {
  searchPlaces: {	
    post: (req, res) => {
      const {lat, lng} = req.body; 
      fetchClosestBusinesses(lat, lng)
      .then(response => Promise.all(response.map(getHeathRating)))
      .then(response => {
          response = response.filter(obj => obj !== undefined)
          res.send(response)
      })
      .catch(err => console.log(err))      
    }
  },
  searchId: {
  	post: (req,res) => {
  		let {id} = req.params
      fetchBusinessDetails(id)
      .then(response => fetchReviews(id, response))
      .then(response => getHeathRating(response))
      .then(response => res.send(response))
      .catch(err => console.log(err))
  	}
  }
}

module.exports = yelpRoutes

  //axios.get(`https://api.yelp.com/v3/businesses/matches?name=${array[0]}&address1=${array[1]}&city=${array[2]}&state=${array[3]}&country=${array[4].slice(0, 2)}`, Headers)
//https://data.cityofnewyork.us/resource/xx67-kt59.json?$where=dba="Udon West" 
