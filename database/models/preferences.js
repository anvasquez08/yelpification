const models = require('./index.js');

module.exports = (sequelize, DataTypes) => {
  var Preferences = sequelize.define('Preferences', {
    id: {
      primaryKey: true,
    	type: DataTypes.STRING,
    	allowNull: false,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    location_address1: {
    	type: DataTypes.STRING,
    	allowNull: true,
    },
    location_city: {
      type: DataTypes.STRING,
      allowNull: true,
    }, 
    location_zip_code: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });

  Preferences.associate = (models) => {
    Preferences.belongsTo(models.User,{
      foreignKey: 'userId', 
      targetKey: 'id',
      onDelete: 'CASCADE',
    });
  };
  return Preferences;
};

      // id: id,
      // image_url: image_url,
      // name: name,
      // url: url,
      // rating: rating,
      // location_address1: place.location['address1'],
      // location_city: place.location['city'], 
      // location_zip_code: place.location['zip_code']