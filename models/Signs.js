const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Signs extends Model {}

Signs.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sign_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sign_image: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    birthday: {
      type: DataTypes.STRING,
      references: {
        model: 'birthday',
        key: 'birthday'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'signs'
  }
);

module.exports = Signs;