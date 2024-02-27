const router = require('express').Router()
const controller = require('../controllers/tickets')

router.get('/', controller.GetTickets)

router.post('/', controller.CreateTickets)

router.delete('/:ticket_id', controller.DeleteTickets)

module.exports = router
