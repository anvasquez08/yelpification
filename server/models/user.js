module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
    	type: DataTypes.STRING
    },
    password: {
  	    type: DataTypes.STRING
      }
    });

  User.associate = (models) => {
    // associations can be defined here
  };
  return User;
};