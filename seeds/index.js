const seedUsers = require('./user-seeds');

const sequelize = require('../config/connection');
const seedShows = require('./show-seeds');
const seedMovies = require('./movie-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();

  console.log('--------------');
  await seedMovies();

  console.log('--------------');
  await seedShows();

  process.exit(0);
};

seedAll();
