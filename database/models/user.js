const models = require('./index.js');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
    	type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
  	  type: DataTypes.STRING,
      allowNull: false,
    }
  });

  User.associate = (models) => {
    User.hasMany(models.Preferences, {
      foreignKey: 'userId', 
      sourceKey: 'id',
    });
  };
  return User;
};

/*
  User.associate = (models) => {
    User.hasMany(models.Preferences, {
      foreignKey: 'userId', 
      as: 'preferences',
    });
  };

*/
