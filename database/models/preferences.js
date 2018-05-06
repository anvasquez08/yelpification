const models = require('./index.js');

module.exports = (sequelize, DataTypes) => {
  var Preferences = sequelize.define('Preferences', {
    yelpID: {
    	type: DataTypes.INTEGER,
    	allowNull: false,
    },
    name: {
    	type: DataTypes.STRING,
    	allowNull: false,
    },
    alias: {
    	type: DataTypes.STRING,
    	allowNull: true,
    },
  });

  Preferences.associate = (models) => {
    Preferences.belongsTo(models.User, {
    	foreignKey: 'userId', 
    	onDelete: 'CASCADE',
    });
  };
  return Preferences;
};