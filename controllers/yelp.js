const sequelize = require(`../database/models/index.js`).sequelize;
const Preferences = sequelize.import(`../database/models/preferences.js`);
const User = sequelize.import(`../database/models/user.js`);
const {Yelp_API, Client_ID} = require('../config.js')
const axios = require('axios');

// axios.defaults.headers.common['Authorization'] = `Bearer ${Yelp_API}`; // need to change so not global


const yelpRoutes= {
  searchPlaces: {
    post: function(req, res) {
      const {term, location} = req.body
      // /businesses/{id}
        //categories, categories[x].alias, hours[x].is_open_now, image_url, location,name, photos, price, rating,url
        // console.log(Yelp_API)
        res.send('hit')
        axios.get(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`)
        .then((response) => {
          console.log(response.data.businesses)
          res.send(response.data.businesses)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}

  module.exports = yelpRoutes