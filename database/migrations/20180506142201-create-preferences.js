module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('Preferences', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      yelpID: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      alias: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      userId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE', 
        references: {
          model: 'Users', 
          key: 'id', 
          as: 'userId',
        },
      },
    });
  },
  down: (queryInterface) => queryInterface.dropTable('Preferences'),
};