const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    email: 'bridgettvalet@mail.com',
    password: 'passpass',
    birthday: 'Libra'
  },
  {
    email: 'wonderman@go.com',
    password: 'password123',
    birthday: 'Gemini'
  },
  {
    email: 'getout@go.com',
    password: 'password123',
    birthday: 'Pisces'
  },
  {
    email: 'runforestrun@kix.com',
    password: 'password123',
    birthday: 'Leo'
  },
];

const seedUsers = () => User.bulkCreate (userdata, 
  {
   individualHooks: true
  })

module.exports = seedUsers;