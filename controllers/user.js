const sequelize = require(`../database/models/index.js`).sequelize;
const User = sequelize.import(`../database/models/user.js`);

const userRoutes = {
  signup: {
    post: (req, res) => {
      const {username, password} = req.body;
      User.findOne({where: {username: username}})
      .then(response => {
        if (response !== null) {
          res.status(409).end();
        } else {
           /* TO DO: Add hash password middleware */ 
          User.create({username: username, password: password})
          .then(res => console.log('data saved: ', res.get({plain:true})))
          .then(() =>  res.end())
        }
      })
    }
  },
  login: {
    post: (req, res) =>{
      const {username, password} = req.body;
      User.findOne({where: {username: username}})
      .then(project => {
        console.log('found', project.get({plain:true})) 
        
        /* TO DO: Add authentication middleware */ 
             // compare hashed password ; 
              // if err res.status(401).send()
              // else create session / give token
        res.end()
      })
      .catch(err =>  res.send(401).end())
    }
  }
}

module.exports = userRoutes

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