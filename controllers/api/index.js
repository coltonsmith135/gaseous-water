const router = require('express').Router()

const userControllers = require('./userControllers')
const { Model } = require('sequelize')


router.use('/user', userControllers)

module.exports = router