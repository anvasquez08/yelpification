const sequelize = require(`../database/models/index.js`).sequelize;
const Preferences = sequelize.import(`../database/models/preferences.js`);
const User = sequelize.import(`../database/models/user.js`);
const {Headers} = require('../config.js')
const axios = require('axios');

const yelpRoutes= {
  searchPlaces: {	
    post: function(req, res) {
      const {lat, lng} = req.body; 
      axios.get(`https://api.yelp.com/v3/businesses/search?term="food"&latitude=${lat}&longitude=${lng}&open_now=${true}&limit=${10}`, Headers)
        .then((response) => res.send(response.data))
        .catch((err) => res.send(err))
    }
  }
}

  module.exports = yelpRoutes
