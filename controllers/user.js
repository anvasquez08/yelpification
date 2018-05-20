const sequelize = require(`../database/models/index.js`).sequelize;
const User = sequelize.import(`../database/models/user.js`);
// const Preferences = sequelize.import(`../database/models/preferences.js`);


const userRoutes = {
  signup: {
    post: (req, res) => {
      const {username, password} = req.body;

      User.findOne({where: {username: username}})
      .then(response => {
        if (response !== null) {
          res.status(409).end();
        } else {
            // TO DO: Add hash password middleware  
          User.create({username: username, password: password})
          .then(response => {
            const name = response.get({plain:true}).username
            res.send(name)
          })
          .catch((err) =>  res.status(400).end())
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
        
      //   /* TO DO: Add authentication middleware */ 
             // compare hashed password ; 
              // if err res.status(401).send()
              // else create session / give token

        res.send(project.username)
      })
      .catch(err =>  res.send(401).end())
    }
  }
}

module.exports = userRoutes
