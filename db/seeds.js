const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const Food      = require('../models/food');

mongoose.connect(dbURI, { useMongoClient: true });

mongoose.connection.once('open', () => {
  mongoose.connection.db.dropDatabase();

  const foodData = [
    {
      title: 'Mongolian Beef',
      image: 'https://scontent-lht6-1.cdninstagram.com/t51.2885-15/e15/1538538_573230372752861_370255472_n.jpg',
      category: 'Dinner'
    },
    {
      title: 'Spaghetti Carbonara',
      image: 'https://scontent-lht6-1.cdninstagram.com/t51.2885-15/e15/1516879_268343206655563_1975558125_n.jpg',
      category: 'Dinner'
    },
    {
      title: 'Nutella waffle sandwich cookies',
      image: 'https://scontent-lht6-1.cdninstagram.com/t51.2885-15/e15/928413_471097506327501_1175692522_n.jpg',
      category: 'Desert'
    },
    {
      title: 'Chilli cheese fries with bacon',
      image: 'https://scontent-lht6-1.cdninstagram.com/t51.2885-15/e15/1516917_1415620932013462_1276694992_n.jpg',
      category: 'Lunch'
    },
    {
      title: 'Norwegian Smoked Salmon & Caviar Cream Cheese on a Plain Bagel',
      image: 'https://scontent-lht6-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/11820589_1071085172916383_422777308_n.jpg',
      category: 'Breakfast'
    },
    {
      title: 'Classic Fish & Chips',
      image: 'https://gustoprontoltd.co.uk/thecadogan/wp-content/uploads/sites/4/2016/10/Fish-2-640x640.png',
      category: 'Dinner'
    }
  ];

  Food
    .create(foodData)
    .then(foods => console.log(`${foods.length} foods created!`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});