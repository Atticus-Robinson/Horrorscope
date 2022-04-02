const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    email: 'bridgettvalet@mail.com',
    password: 'passpass',
    birthday: 10101978
  },
  {
    email: 'wonderman@go.com',
    password: 'password123',
    birthday: 11211984
  },
  {
    email: 'getout@go.com',
    password: 'password123',
    birthday: 12291985
  },
  {
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