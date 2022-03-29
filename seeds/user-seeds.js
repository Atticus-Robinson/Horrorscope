const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'BridgettVallay',
    email: 'bridgettvalet@mail.com',
    password: 'passpass'
  },
  {
    username: 'RickyBobby',
    email: 'wonderman@go.com',
    password: 'password123'
  },
  {
    username: 'BobbyForest',
    email: 'getout@go.com',
    password: 'password123'
  },
  {
    username: 'ForestChump',
    email: 'runforestrun@kix.com',
    password: 'password123'
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;