const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    email: 'bridgettvalet@mail.com',
    password: 'passpass',
    birthday: 1978-10-14
  },
  {
    email: 'wonderman@go.com',
    password: 'password123',
    birthday: 1984-11-12
  },
  {
    email: 'getout@go.com',
    password: 'password123',
    birthday: 1985-02-04
  },
  {
    email: 'runforestrun@kix.com',
    password: 'password123',
    birthday: 1971-02-17
  },
];

const seedUsers = () => User.bulkCreate (userdata, 
  {
   individualHooks: true
  })

module.exports = seedUsers;