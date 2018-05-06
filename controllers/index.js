const {Yelp_API, Client_ID} = require('../../config.js')
const axios = require('axios');

module.exports = {
  login: {
    get: function (req, res) {
      res.send('login endpoint hit')
    }
  },
  signup: {
    post: function (req, res) {
      res.send('sign-up endpoint hit')
    }
  },
  auto: {
    get: function (req, res) {
      res.send('autocomplete endpoint hit')
    }
  },
  places: {
    get: function (req, res) {
      res.send('places end point hit')

      }
  },
  business: {
    get: function (req, res) {
      res.send('business endpoint hit')
    }
  },
  save: {
    post: function (req, res) {
      res.send('save endpoint hit')
    }
  }
  };