const Game = require('./Game')
const User = require('./User')

Game.belongsTo(User, {foreignKey: 'user_id'})

User.hasMany(Game, {foreignKey: 'user_id'})

module.exports = {Game, User }
