const router = require('express').Router()

const apiControllers = require('./api')
const homeControllers = require('./homeControllers')

router.use('/', homeControllers)
router.use('/api', apiControllers)

module.exports = router