const sequelize = require('../config/connection');
const { Model, DataTypes } = require("sequelize");


class Game extends Model {}


Game.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      }
    },
    game_url: {
      type: DataTypes.STRING,
    },
    gameName: {
        type: DataTypes.STRING,
    },
    background_image: {
        type: DataTypes.STRING,
    },
    rating: {
        type: DataTypes.DECIMAL,
    },
    platform: {
        type: DataTypes.STRING,
    },
    release_date: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'game'
  }
);

module.exports = Game;