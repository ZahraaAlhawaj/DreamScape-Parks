const router = require('express').Router()
const controller = require('../controllers/rides')

router.get('/', controller.GetRides)

router.post('/', controller.CreateRides)

module.exports = router
