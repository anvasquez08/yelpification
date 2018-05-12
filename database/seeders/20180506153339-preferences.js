module.exports = {
  up: (queryInterface, Sequelize) => {
   
  return queryInterface.bulkInsert('Preferences', [{
            id: "JlFbaMbMzsu7FA307mUIqg", 
            image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/4quqnl-wOV5UGKdT3Qitjg/o.jpg", 
            name: "JoJu",
            url: "https://www.yelp.com/biz/joju-elmhurst?adjust_creative=8f5KCkT5LE3rq2TbOQVjEg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=8f5KCkT5LE3rq2TbOQVjEg", 
            rating: 4.5, 
            location_address1: "83-25 Broadway", 
            location_city: "Elmhurst", 
            location_zip_code: "11373",
            userId: 3
          }, {
            id: "KB9_w7vCPMvS82jiUg2ndw", 
            image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/bMH9KNWV7MkpM48byc_K3Q/o.jpg", 
            name: "Papa's Kitchen",
            url: "https://www.yelp.com/biz/papas-kitchen-woodside?adjust_creative=8f5KCkT5LE3rq2TbOQVjEg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=8f5KCkT5LE3rq2TbOQVjEg", 
            rating: 4.5, 
            location_address1: "65-40 Woodside Ave", 
            location_city: "Woodside", 
            location_zip_code: "11377",
            userId: 3
          }, {

            id: "dv-RaOwKFizDe4c5-sVJ5w", 
            image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/M-w1KCv3fclLzEjHqYnetQ/o.jpg", 
            name: "Peking BBQ",
            url: "https://www.yelp.com/biz/peking-bbq-woodside?adjust_creative=8f5KCkT5LE3rq2TbOQVjEg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=8f5KCkT5LE3rq2TbOQVjEg", 
            rating: 4, 
            location_address1: "58-11 Woodside Ave", 
            location_city: "Woodside", 
            location_zip_code: "11377",
            userId: 2

          }, {

            id: "XR8aTtEBoOzamEjR5DRynw", 
            image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/ovDKUWcJmtY-iDSKQtoHdg/o.jpg", 
            name: "Mamá Pío",
            url: "https://www.yelp.com/biz/mam%C3%A1-p%C3%ADo-maspeth?adjust_creative=8f5KCkT5LE3rq2TbOQVjEg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=8f5KCkT5LE3rq2TbOQVjEg", 
            rating: 4.5, 
            location_address1: "53-05 65th Pl", 
            location_city: "Maspeth", 
            location_zip_code: "11378",
            userId: 1

          }
          ], {});
  },

  down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('Preferences', null, {});
  }
};

/*        id: id, 
          image_url: image_url, 
          name: name,
          url: url, 
          rating: rating, 
          location_address1: location_address1, 
          location_city: location_city, 
          location_zip_code: location_zip_code,
          userId: user.getDataValue('id')

*/