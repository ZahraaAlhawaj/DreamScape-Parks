const router = require('express').Router()
const controller = require('../controllers/food')

router.get('/', controller.GetFood)

router.post('/', controller.CreateFood)

module.exports = router
