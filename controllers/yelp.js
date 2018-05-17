const sequelize = require(`../database/models/index.js`).sequelize;
const Preferences = sequelize.import(`../database/models/preferences.js`);
const User = sequelize.import(`../database/models/user.js`);
const { Headers, Google_API } = require('../config.js')
let { getHeathRating } = require('./helpers.js')

const axios = require('axios');
const Promise = require("bluebird");

const yelpRoutes= {
  searchPlaces: {	
    post: (req, res) => {
      const {lat, lng} = req.body; 
      axios.get(`https://api.yelp.com/v3/businesses/search?term="food"&latitude=${lat}&longitude=${lng}&open_now=${true}&limit=${4}`, Headers)
        .then(response => {   
          const arrayOfPlaces = response.data.businesses
          Promise.all(arrayOfPlaces.map(getHeathRating))
          .then(data => res.send(data))
          .catch(err => console.log(err))

        })
        .catch(err => console.log('outter err'))       
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
          const {name} = resultDetails
          console.log('this is the name', name)
	  			res.send(resultDetails)
	  		 })
  			.catch((err) => console.log('inner error'))
  		})  		
	    .catch((err) => console.log('outer error'))
  	}
  }
}

module.exports = yelpRoutes

// const getHeathRating = (singlePlaceObj) => {
//   return axios.get(`https://data.cityofnewyork.us/resource/xx67-kt59.json?$where=dba="${singlePlaceObj.name}"`)
//   .then(response => {
//     if (response.data.length > 0) {
//       singlePlaceObj['healthRating'] = response.data
//       return singlePlaceObj
//     } else {
//       singlePlaceObj['healthRating'] = []
//       return singlePlaceObj
//     }    
//   })
//   .catch(err => console.log('inner error'))
// }

  //axios.get(`https://api.yelp.com/v3/businesses/matches?name=${array[0]}&address1=${array[1]}&city=${array[2]}&state=${array[3]}&country=${array[4].slice(0, 2)}`, Headers)
//https://data.cityofnewyork.us/resource/xx67-kt59.json?$where=dba="Udon West" 
