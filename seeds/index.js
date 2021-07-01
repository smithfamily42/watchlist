const seedUsers = require('./user-seeds');

const sequelize = require('../config/connection');
const seedMovies = require('./movie-seeds');
const seedShows = require('./shows-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();

  console.log('--------------');
  await seedShows();

  console.log('--------------');
  await seedMovies();

  

  process.exit(0);
};

seedAll();
