module.exports = {
  up: (queryInterface, Sequelize) => {
     queryInterface.createTable('Users', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    });
  },
  down: (queryInterface) => queryInterface.dropTable('Users')
};