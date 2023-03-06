const sequelize = require("../config/connection");
const User = require("../models/User");

const userData = require("./userData.json");
const wishListData = require('./wishList.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // for (const game of gameData) {
  //   await Game.create({
  //     ...game,
  //     user_id: users[Math.floor(Math.random() * userData.length)].id,
  //   });
  // }

  // for (const review of reviewData) {
  //   await Review.create({
  //     ...review,
  //     user_id: users[Math.floor(Math.random() * userData.length)].id,
  //   });
  // }

  // await WishList.bulkCreate(wishListData, {
  //   individualHooks: true,
  //   returning: true,
  // }) 

  process.exit(0);
};

seedDatabase();
