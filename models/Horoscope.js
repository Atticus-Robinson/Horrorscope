const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Horoscope extends Model {}
Horoscope.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    horoscope_text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    sign_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "signs",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "horoscope",
  }
);

module.exports = Horoscope;