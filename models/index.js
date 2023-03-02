const User = require("./User");
const Game = require("./Game");
const Review = require("./Review");
const WishList = require('./wishList')

User.hasMany(Game, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Game.belongsToMany(User, {
  through: {model: WishList, unique: true},
  as: 'gameWishList'
});

User.belongsToMany(Game, {
  through: {model: WishList},
})

Review.belongsTo(Game, {
  foreignKey: "game_id",
});

Review.belongsTo(User, {
  foreignKey: 'user_id'
})

module.exports = { User, Game, Review, WishList };
