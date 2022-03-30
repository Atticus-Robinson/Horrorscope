const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'BridgettVallay',
    email: 'bridgettvalet@mail.com',
    password: 'passpass',
    birthday: 10101978
  },
  {
    username: 'RickyBobby',
    email: 'wonderman@go.com',
    password: 'password123',
    birthday: 11211984
  },
  {
    username: 'BobbyForest',
    email: 'getout@go.com',
    password: 'password123',
    birthday: 12291985
  },
  {
    username: 'ForestChump',
    email: 'runforestrun@kix.com',
    password: 'password123',
    birthday: 09211994
  },
];

const seedUsers = () => User.bulkCreate (userdata, 
  {
   individualHooks: true
  })

module.exports = seedUsers;