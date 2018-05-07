const sequelize = require(`../database/models/index.js`).sequelize;
const Sequelize = require(`../database/models/index.js`).Sequelize;
const Preferences = sequelize.import(`../database/models/preferences.js`);
const User = sequelize.import(`../database/models/user.js`);

const preferencesRoutes = {
	search: {
		get: (req, res) => {
			const {username} = req.params
			User.findAll({
				include: [{
					model: Preferences, 
				}],
				where: {username: username}
			})
			.then(response => {
				const data = response.map((r) => (r.toJSON()));
				console.log('sucsess: ', data[0].Preferences)	
			})
			.catch(err => console.log('outer error', err))
		}
	}
}

module.exports = preferencesRoutes


 /*finds all preferences with users 

			Preferences.findAll({include: [{model:User}]})

			Preferences.findAll({
				include: [{
					model: User, 
					where: {userId: sequelize.where(Sequelize.col('userId'), Sequelize.col('User.id'))}
				}]
			})

			Preferences.findAll({
				include: [{
					model: User, 
					where: {userId: sequelize.where(Sequelize.col('userId'), Sequelize.col('User.id'))}
				}]
			})
*/



/* WORKING TWO QUERIES 
/*User.findOne({where: {username: username}, attributes:['id']})
				.then(res => {
					const obj = res.get({plain:true})
					
					Preferences.findAll({ where:{ userId: obj.id}})
						.then(response => {
							const data = response.map((r) => (r.toJSON()));
							console.log('sucsess: ', data)
							return res.send(data)
						})
						.catch(err => console.log('inner error'))
				.catch(err => console.log('outer error', err))
				})*/


