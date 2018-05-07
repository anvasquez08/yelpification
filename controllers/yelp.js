const sequelize = require(`../database/models/index.js`).sequelize;
const Preferences = sequelize.import(`../database/models/preferences.js`);
const User = sequelize.import(`../database/models/user.js`);
const {Headers} = require('../config.js')
const axios = require('axios');

const yelpRoutes= {
  searchPlaces: {	
    post: function(req, res) {
      const {location, radius, price} = req.body; 
      axios.get(`https://api.yelp.com/v3/businesses/search?&location=${location}&price=${1, 2}&open_now=${true}&limit=${10}`, Headers)
        .then((response) => {
          res.send(response.data.businesses)
        })
        .catch((err) => console.log(err))
    }
  }
}

  module.exports = yelpRoutes

  /*
  - missing term and radius
  */