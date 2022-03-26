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
            allowNull: false,
          },
          sign_dates: {
              type: DataTypes.STRING,
              allowNull: false,
          },
          user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id'
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

