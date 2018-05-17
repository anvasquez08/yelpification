const sequelize = require(`../database/models/index.js`).sequelize;
const Preferences = sequelize.import(`../database/models/preferences.js`);
const User = sequelize.import(`../database/models/user.js`);
const {Headers,Google_API} = require('../config.js')
const axios = require('axios');
const Promise = require("bluebird");

const getHeathRating = (singlePlaceObj) => {
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
  .catch(err => console.log('inner error'))
}

const yelpRoutes= {

  searchPlaces: {	
    post: (req, res) => {
      const {lat, lng} = req.body; 


      axios.get(`https://api.yelp.com/v3/businesses/search?term="food"&latitude=${lat}&longitude=${lng}&open_now=${true}&limit=${4}`, Headers)
        .then((response) => {   
          const arrayOfPlaces = response.data.businesses

          Promise.all(arrayOfPlaces.map(getHeathRating)).then(data => console.log(data))
          res.send('done')
          // arrayOfPlaces.forEach(obj => {
          //   getHeathRating(obj).then(response => console.log(response))
          // })

          // console.log(arrayOfPlaces.forEach(obj => console.log(obj.healthRating)))

        })
        .catch(err => console.log('outter err'))
// The Alcove
// Slide Bar-B-Q
// Jaew Hon New York
// Pelicana Chicken
     
        
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
  //axios.get(`https://api.yelp.com/v3/businesses/matches?name=${array[0]}&address1=${array[1]}&city=${array[2]}&state=${array[3]}&country=${array[4].slice(0, 2)}`, Headers)
//https://data.cityofnewyork.us/resource/xx67-kt59.json?$where=dba="Udon West" 
/*
//1
searchPlaces: { 
    post: (req, res) => {
      const {lat, lng} = req.body; 
      axios.get(`https://api.yelp.com/v3/businesses/search?term="food"&latitude=${lat}&longitude=${lng}&open_now=${true}&limit=${50}`, Headers)
        .then((response) => {
          const data = response.data
          // console.log(data)
          res.send(data)

          Promise.map(data ,function(place) {
            return  axios.get(`https://data.cityofnewyork.us/resource/xx67-kt59.json?$where=dba="${place.name}"`)
          }).then(result => {
             place['healthGrading'] = result
             console.log('reaching health grading', result)
             return place
          }).catch(err => console.log('inner error', err))
        })
        .catch(err => console.log('outter err'))
    }

//2


          const resultArray = (arrayOfObjects) => {
            console.log('result arr')
            return Promise.each(arrayOfObjects, (singleOnk) => { return getHeathRating(singleOnk) })
          }
*/

/*
  searchPlaces: { 
    post: (req, res) => {
      const {lat, lng} = req.body; 
      axios.get(`https://api.yelp.com/v3/businesses/search?term="food"&latitude=${lat}&longitude=${lng}&open_now=${true}&limit=${4}`, Headers)
        .then((response) => {
          const arrayOfPlaces = response.data
          res.send(arrayOfPlaces)
          
          Promise.map(arrayOfPlaces, (place) => {
            return place
          })
          .then(() => console.log('done'))
          .catch((err) => console.log(err))      
        })
        .catch(err => console.log('outter err'))

     
        
    }
    
  },


*/

