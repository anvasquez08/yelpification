module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('Preferences', {
      id: {
        primaryKey: true,
        type: Sequelize.STRING,
        allowNull: false,
      },
      image_url: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      url: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      rating: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      location_address1: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      location_city: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      location_zip_code: {
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

/*
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
*/