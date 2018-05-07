const sequelize = require(`../database/models/index.js`).sequelize;
const Sequelize = require(`../database/models/index.js`).Sequelize;
const Preferences = sequelize.import(`../database/models/preferences.js`);
const User = sequelize.import(`../database/models/user.js`);

const preferencesRoutes = {
	search: {
		get: (req, res) => {
			const {username} = req.params;
			User.findAll({
				include: [{
					model: Preferences
				}],
				where: {username: username}
			}).then(response => {
				const data = response.map((r) => (r.toJSON()));
				res.send(data)
			}).catch(() => res.status(400))
		}
	}, 
	add: {
		post: (req, res) => {
			const {username} = req.params;
			const {yelpID, name, alias} = req.body;
			User.find({where: {username: username}}).then(user => {
				Preferences.create({
					yelpID: yelpID,
					name: name,
					alias: alias,
					userId: user.getDataValue('id')
				}).then(() => res.send('entry saved'))
				.catch(() => res.status(406))
			})
		}
	}
}

module.exports = preferencesRoutes

/* Reason for double add query:
		"An instance can be created with nested association in one step, provided all elements are new."
*/