module.exports = {
  up: (queryInterface, Sequelize) => {
 return queryInterface.bulkInsert('Preferences', [{
            yelpID: 1,
            name: 'Mexico mexican',
            alias: 'mexican',
            userId: 1
          }, {
            yelpID: 5,
            name: 'Italian pizza',
            alias: 'italian',
            userId: 1
          }, {
            yelpID: 5,
            name: 'Italian pizza',
            alias: 'italian',
            userId: 2
          }, {
            yelpID: 1,
            name: 'Mexico mexican',
            alias: 'mexican',
            userId: 3
          }, {
            yelpID: 10,
            name: 'Sushi',
            alias: 'japanese',
            userId: 3
          }
          ], {});
  },

  down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('Preferences', null, {});
  }
};
