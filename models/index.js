// import all models
const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');
const Signs = require('./Signs');
const Horoscope = require('./Horoscope');

// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

// User.hasMany(Horoscope, {
//   foreignKey: 'user_id'
// });

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Signs.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Horoscope.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Comment, Signs, Horoscope };
