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
      // app.get('/places', (req, res) => {
       
      //     axios({
      //         method: 'get',
      //         url: 'https://api.yelp.com/v3/businesses/search',
      //         params: {
      //             'term': 'delis',
      //             'latitude': '37.786882',
      //             'longitude':'-122.399972'
      //         },
      //         headers: {
      //             'Content-Type': 'application/json',
      //             'Authorization': 'Bearer WdHowjKqwFZAU9Mn_mUsuO0Yx_a_BRJ5pMsio9RlScCDvXzkHtRbziKgDD7X3w5yP-drb3_3NuNBw-4WwenZ6PDv2rfBow4Btafp_A7Bg_ZHymI68rNOfdi6EZzbWnYx'
      //         }
      //     }).then(response => console.log('sucess:', response.data))
      //     .catch((error) => console.log('ERROR:',error))
          
      // })
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
  // ,
  // messages: {
  //   get: function (req, res) {
  //     models.messages.get(function(err, results) {
  //       if (err) { /* do something */ }
  //       res.json(results);
  //     });
  //   },
  //   post: function (req, res) {
  //     var params = [req.body.message, req.body.username, req.body.roomname];
  //     models.messages.post(params, function(err, results) {
  //       if (err) { /* do something */ }
  //       res.sendStatus(201);
  //     });
  //   }
  // },

  // users: {
  //   get: function (req, res) {
  //     models.users.get(function(err, results) {
  //       if (err) { /* do something */ }
  //       res.json(results);
  //     });
  //   },
  //   post: function (req, res) {
  //     var params = [req.body.username];
  //     models.users.post(params, function(err, results) {
  //       if (err) { /* do something */ }
  //       res.sendStatus(201);
  //     });
  //   }
  // }
  };