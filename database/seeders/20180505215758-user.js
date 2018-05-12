module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
    	username: 'John',
      password: 'JPassword'
    }, {
    	username: 'Alice',
      password: 'APassword'
    }, {
    	username: 'Ana',
      password: 'APassword'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
