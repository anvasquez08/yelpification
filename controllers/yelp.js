const axios = require('axios'); 
const sequelize = require(`../database/models/index.js`).sequelize;
const Preferences = sequelize.import(`../database/models/preferences.js`);
const User = sequelize.import(`../database/models/user.js`);
const { Headers, Google_API } = require('../config.js')
const { getHeathRating } = require('./helpers.js')

const fetchBusinessDetails = (id) => {
  return axios.get(`https://api.yelp.com/v3/businesses/${id}`, Headers)
  .then(response => {return response.data})
  .catch(err => console.log('yelp business api error', err))
}

const fetchReviews = (id, responseBody) => {
  return axios.get(`https://api.yelp.com/v3/businesses/${id}/reviews`, Headers)
  .then(response => { 
     responseBody['reviews'] = response.data
    return responseBody
  })
  .catch(err => console.log('yelp review api error', err))
}

const yelpRoutes= {
  searchPlaces: {	
    post: (req, res) => {
      const {lat, lng} = req.body; 
      axios.get(`https://api.yelp.com/v3/businesses/search?term="food"&latitude=${lat}&longitude=${lng}&open_now=${true}&limit=${40}`, Headers)
        .then(response => {   
          const arrayOfPlaces = response.data.businesses
          Promise.all(arrayOfPlaces.map(getHeathRating))
          .then(data => {
            const finalData = data.filter(obj => obj !== undefined)
            res.send(finalData)
          })
          .catch(err => console.log('inner error', err))
        })
        .catch(err => console.log('outter err'))       
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
  		// axios.get(`https://api.yelp.com/v3/businesses/${id}`, Headers)
  		// .then(response => {
  		// 	const resultDetails = response.data
  		// 	axios.get(`https://api.yelp.com/v3/businesses/${id}/reviews`, Headers)
  		// 	.then(response => {
  		// 		const reviews = response.data
    //       resultDetails['reviews'] = reviews
    //       const {name} = resultDetails
    //       console.log('this is the name', name)
	  	// 		res.send(resultDetails)
	  	// 	 })
  		// 	.catch((err) => console.log('inner error'))
  		// })  		
	   //  .catch((err) => console.log('outer error'))
  	}
  }
}

module.exports = yelpRoutes

  //axios.get(`https://api.yelp.com/v3/businesses/matches?name=${array[0]}&address1=${array[1]}&city=${array[2]}&state=${array[3]}&country=${array[4].slice(0, 2)}`, Headers)
//https://data.cityofnewyork.us/resource/xx67-kt59.json?$where=dba="Udon West" 



/*

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

*/