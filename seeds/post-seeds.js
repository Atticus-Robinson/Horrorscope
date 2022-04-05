const { Post } = require('../models');

const postdata = [
  {
    description: 'In hac habitasse platea dictumst.',
    user_id: 1
  },
  {
    description: 'Morbi non quam nec dui luctus rutrum.',
    user_id: 1
  },
  {
    description: 'In hac habitasse platea dictumst.',
    user_id: 3
  },
  {
    description: 'Nulla tellus.',
    user_id: 3
  },
  {
    description: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    user_id: 3
  },
  {
    description: 'Etiam justo.',
    user_id: 4
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
