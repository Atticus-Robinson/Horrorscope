// import all models
const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');
const Horoscope = require('./Horoscope');
const Birthday = require('./Birthday');

// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

User.hasOne(Birthday, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
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

module.exports = { User, Post, Comment, Horoscope };
