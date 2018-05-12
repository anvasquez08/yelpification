const sequelize = require(`../database/models/index.js`).sequelize;
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
			const {  id, image_url, name, url, rating, location_address1, location_city, location_zip_code } = req.body;
			User.find({where: {username: username}}).then(user => {
				Preferences.create({
					id: id, 
					image_url: image_url, 
					name: name,
					url: url, 
					rating: rating, 
					location_address1: location_address1, 
					location_city: location_city, 
					location_zip_code: location_zip_code,
					userId: user.getDataValue('id')
				}).then(() => res.send('entry saved'))
				.catch(() => res.status(406))
			})
		}
	}, 
	delete: {
		delete:(req, res) => {
		const {username, yelpID} = req.params;
		Preferences.find({
			include: [{
				model: User, 
				where: {username: username}
			}], 
			where: {yelpID: yelpID}
		})
		.then(entry => entry.destroy())	
			.then(() => res.send('deleted'))
			.catch(() => res.status(410))
		.catch(err => res.send('err: data does not exist'))
		}}
	}

module.exports = preferencesRoutes

/* Reason for double add query:
		"An instance can be created with nested association in one step, provided all elements are new."
OLD VERSION:
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
	}, 
*/