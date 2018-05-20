const sequelize = require(`../database/models/index.js`).sequelize;
const User = sequelize.import(`../database/models/user.js`);
// const sequelize = require(`../database/models/index.js`).sequelize;
// const Preferences = sequelize.import(`../database/models/preferences.js`);
// const User = sequelize.import(`../database/models/user.js`);
// const { Headers, Google_API } = require('../config.js')

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
          .then(res => console.log('data saved: ', res.get({plain:true}) ))
          .then(() =>  res.end())
        }
      })
    }
  },
  login: {
    post: (req, res) =>{
      console.log('clicked!')
      const {username, password} = req.body;
      // User.findOne({where: {username: username}})
      // .then(project => {
      //   console.log('found', project.get({plain:true})) 
        
      //   /* TO DO: Add authentication middleware */ 
             // compare hashed password ; 
              // if err res.status(401).send()
              // else create session / give token
        const data = true
        res.send(data)
      // })
      // .catch(err =>  res.send(401).end())
    }
  }
}

module.exports = userRoutes
