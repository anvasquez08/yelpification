const sequelize = require(`../database/models/index.js`).sequelize;
const Preferences = sequelize.import(`../database/models/preferences.js`);
const User = sequelize.import(`../database/models/user.js`);
const {Headers} = require('../config.js')
const axios = require('axios');

const yelpRoutes= {
  searchPlaces: {	
    post: (req, res) => {
      const {lat, lng} = req.body; 
      axios.get(`https://api.yelp.com/v3/businesses/search?term="food"&latitude=${lat}&longitude=${lng}&open_now=${true}&limit=${50}`, Headers)
        .then((response) => res.send(response.data))
        .catch((err) => res.send(err))
    }
  },
  searchId: {
  	post: (req,res) => {
  		let {id} = req.params
  		axios.get(`https://api.yelp.com/v3/businesses/${id}`, Headers)
  		.then(response => {
  			const resultDetails = response.data
  			axios.get(`https://api.yelp.com/v3/businesses/${id}/reviews`, Headers)
  			.then(response => {
  				const reviews = response.data
          resultDetails['reviews'] = reviews
	  			res.send(resultDetails)
	  		 })
  			.catch((err) => console.log('inner error'))
  		})  		
	    .catch((err) => console.log('outer error'))
  	}
  }, 
  businessSearch: {
    post: (req, res) => {
      const {value} = req.body
      const array = value.split(',').map(str => str.trim())
      axios.get(`https://api.yelp.com/v3/businesses/matches?name=${array[0]}&address1=${array[1]}&city=${array[2]}&state=${array[3]}&country=${array[4].slice(0, 2)}`, Headers)
      .then(response => {
        console.log(response.data)
        res.send(response)
      })
      .catch(err => console.log(err))
      res.send('hit')
    }
  }
}

  module.exports = yelpRoutes
