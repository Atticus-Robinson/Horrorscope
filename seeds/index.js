const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');
const seedSigns = require('./sign-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: false });
  console.log('------- DATABASE SYNCED ---------\n');

  await seedUsers();
  console.log('------- USERS SEEDED ---------\n');

  await seedPosts();
  console.log('------- POSTS SEEDED ---------\n');

  await seedComments();
  console.log('------- COMMENTS SEEDED ---------\n');

  await seedSigns();
  console.log('------- SIGNS SEEDED ---------\n');

  process.exit(0);
};

seedAll();
