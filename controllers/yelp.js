


// const axios = require('axios');
// const {Yelp_API, Client_ID} = require('../config.js')
// axios.defaults.headers.common['Authorization'] = `Bearer ${Yelp_API}`;
// // module.exports = {
//   signup: {
//     post: function(req, res) {
//     User.create({
//         username: 1, 
//         password: 'p'
//       }).then(res => console.log('this is the response', res))

//       res.send('hit')
        

//     }
//   },
//   searchPlaces: {
//     post: function(req, res) {
//       const {term, location} = req.body
//       // /businesses/{id}
//         //categories, categories[x].alias, hours[x].is_open_now, image_url, location,name, photos, price, rating,url
//         // console.log(Yelp_API)
//         res.send('hit')
//         axios.get(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`)
//         .then((response) => {
//           console.log(response.data.businesses)
//           res.send(response.data.businesses)
//         })
//         .catch((err) => {
//           console.log(err)
//         })
//     }
//   },
//   }

  /*
  - Office Lunch Helper
- Funny app to help pick lunch with your group of colleagues 

  => One  group with many members 
  => Each member will have mood/ preferences 
  => all members will vote on top 2
  */