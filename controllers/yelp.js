const axios = require('axios'); 
const { getHeathRating, fetchBusinessDetails, fetchReviews, fetchClosestBusinesses, fetchBusinessesByName } = require('./helpers.js')
const { Headers } = require('../config.js')

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
      `fetchBusinessDetails`(id)
      .then(response => fetchReviews(id, response))
      .then(response => getHeathRating(response))
      .then(response => res.send(response))
      .catch(err => console.log(err))
  	}
  }, 
  searchName: {
    post: (req, res) => {
      const {term} = req.body;
      const name = term.split(',')[0]
      const address = term.split(',').slice(1).join(',').trim()

      fetchBusinessesByName(name, address)
      .then(response => Promise.all(response.map(getHeathRating)))
      .then(response => {
          response = response.filter(obj => obj !== undefined)
          res.send(response)
      })
      .catch(err => console.log(err))
    }
  }
}

module.exports = yelpRoutes

//https://data.cityofnewyork.us/resource/xx67-kt59.json?$where=dba="Udon West" 
