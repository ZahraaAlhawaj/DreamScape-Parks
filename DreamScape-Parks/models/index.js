const mongoose = require('mongoose')
const foodSchema = require('./Food')
const rideSchema = require('./Ride')
const ticketSchema = require('./Ticket')

const Food = mongoose.model('Food', foodSchema)
const Ride = mongoose.model('Ride', rideSchema)
const Ticket = mongoose.model('Ticket', ticketSchema)

module.exports = {
  Food,
  Ride,
  Ticket
}
