const User = require("./User");
const Game = require("./Game");
const Review = require("./Review");

User.hasMany(Game, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Game.belongsToMany(User, {
  foreignKey: "user_id",
});

Review.belongsTo(Game, {
  foreignKey: "game_id",
});

Review.belongsTo(User, {
  foreignKey: 'user_id'
})

module.exports = { User, Game, Review };
