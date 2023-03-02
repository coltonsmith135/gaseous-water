// need id, user_id, game_id,
// user and game_id would be foreign keys referencing user and gameconst { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { Model, DataTypes } = require("sequelize");


class WishList extends Model {}


WishList.init(
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
        unique: false
      }
    },
    game_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'game',
        key: 'id',
        unique: false
      }
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'wishList'
  }
);

module.exports = WishList;