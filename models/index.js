const User = require("./User");
const Game = require("./Game");

User.hasMany(Game, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Game.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Game };
